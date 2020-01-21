import Vue from 'vue'
const cashlib = require('bitcore-lib-cash')

export default {
  namespaced: true,
  state: {
    complete: false,
    xPrivKey: null,
    identityPrivKey: null,
    addresses: {},
    outputs: []
  },
  mutations: {
    completeSetup (state) {
      state.complete = true
    },
    reset (state) {
      state.xPrivKey = null
      state.identityPrivKey = null
      state.addresses = {}
    },
    setAddress (state, { address, privKey }) {
      Vue.set(state.addresses, address, { privKey })
    },
    setXPrivKey (state, xPrivKey) {
      state.xPrivKey = xPrivKey
      state.identityPrivKey = xPrivKey.deriveChild(20102019)
        .deriveChild(0, true)
        .privateKey // TODO: Proper path for this
    },
    reinitialize (state) {
      if (state.xPrivKey != null) {
        state.xPrivKey = cashlib.HDPrivateKey.fromObject(state.xPrivKey)
        state.identityPrivKey = cashlib.PrivateKey.fromObject(state.identityPrivKey)
      }
    },
    setUTXOs (state, outputs) {
      state.outputs = outputs
    },
    setUTXOsByAddr (state, { addr, outputs }) {
      state.outputs = state.outputs.filter(output => output.address !== addr)
      state.outputs = state.outputs.concat(outputs)
    },
    removeUTXO (state, output) {
      state.outputs = state.outputs.filter(utxo => utxo !== output)
    }
  },
  actions: {
    completeSetup ({ commit }) {
      commit('completeSetup')
    },
    reset ({ commit }) {
      commit('reset')
    },
    reinitialize ({ commit }) {
      commit('reinitialize')
    },
    // TODO: Set callbacks
    setXPrivKey ({ commit }, xPrivKey) {
      commit('setXPrivKey', xPrivKey)
    },
    initAddresses ({ commit, rootGetters, getters }) {
      let xPrivKey = getters['getXPrivKey']
      for (var i = 0; i < 2; i++) {
        let privKey = xPrivKey.deriveChild(44)
          .deriveChild(0)
          .deriveChild(0)
          .deriveChild(i, true)
          .privateKey
        let address = privKey.toAddress('testnet').toLegacyAddress()
        commit('setAddress', { address, privKey })
      }
    },
    async updateUTXOFromAddr ({ commit, rootGetters }, addr) {
      let client = rootGetters['electrumHandler/getClient']
      let elOutputs = await client.blockchainAddress_listunspent(addr)
      let outputs = elOutputs.map(elOutput => {
        let output = {
          txId: elOutput.tx_hash,
          outputIndex: elOutput.tx_pos,
          satoshis: elOutput.value,
          type: 'p2pkh',
          address: addr
        }
        return output
      })
      commit('setUTXOsByAddr', { addr, outputs })
    },
    async updateUTXOs ({ getters, dispatch }) {
      let addresses = Object.keys(getters['getAddresses'])

      await Promise
        .all(addresses.map(addr => dispatch('updateUTXOFromAddr', addr)))
    },
    async startListeners ({ dispatch, getters, rootGetters }) {
      let client = rootGetters['electrumHandler/getClient']
      await client.subscribe.on(
        'blockchain.address.subscribe',
        async (result) => {
          let address = result[0]
          await dispatch('updateUTXOFromAddr', address)
        })
      let addresses = getters['getAddresses']
      for (var addr in addresses) {
        await client.blockchainAddress_subscribe(addr)
      }
    }
  },
  getters: {
    isSetupComplete (state) {
      return state.complete
    },
    getBalance (state) {
      if (state.outputs.length) {
        return state.outputs.reduce((acc, output) => acc + output.satoshis, 0)
      } else {
        return 0
      }
    },
    getIdentityPrivKey (state) {
      return state.identityPrivKey
    },
    getPaymentAddress: (state) => (seqNum) => {
      if (state.xPrivKey !== null) {
        let privkey = state.xPrivKey.deriveChild(44)
          .deriveChild(0)
          .deriveChild(0)
          .deriveChild(seqNum, true)
        return privkey.toAddress('testnet')
      } else {
        return null
      }
    },
    getMyAddress (state) {
      return state.identityPrivKey.toAddress(
        'testnet') // TODO: Not just testnet
    },
    getMyAddressStr (state) {
      return state.identityPrivKey.toAddress('testnet')
        .toCashAddress() // TODO: Not just testnet
    },
    getAddresses (state) {
      return state.addresses
    },
    getXPrivKey (state) {
      return state.xPrivKey
    },
    getUTXOs (state) {
      return state.outputs
    }
  }
}
