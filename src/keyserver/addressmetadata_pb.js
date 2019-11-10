/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.models.AddressMetadata', null, global);
goog.exportSymbol('proto.models.AddressMetadata.SignatureScheme', null, global);
goog.exportSymbol('proto.models.Entry', null, global);
goog.exportSymbol('proto.models.Header', null, global);
goog.exportSymbol('proto.models.Payload', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.models.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.models.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.models.Header.displayName = 'proto.models.Header';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.models.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.models.Entry.repeatedFields_, null);
};
goog.inherits(proto.models.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.models.Entry.displayName = 'proto.models.Entry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.models.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.models.Payload.repeatedFields_, null);
};
goog.inherits(proto.models.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.models.Payload.displayName = 'proto.models.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.models.AddressMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.models.AddressMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.models.AddressMetadata.displayName = 'proto.models.AddressMetadata';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.models.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.models.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.models.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.models.Header}
 */
proto.models.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.models.Header;
  return proto.models.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.models.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.models.Header}
 */
proto.models.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.models.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.models.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.models.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.models.Header.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.models.Header.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.models.Header.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.models.Header.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.models.Entry.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.models.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.models.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.models.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.models.Header.toObject, includeInstance),
    entryData: msg.getEntryData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.models.Entry}
 */
proto.models.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.models.Entry;
  return proto.models.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.models.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.models.Entry}
 */
proto.models.Entry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = new proto.models.Header;
      reader.readMessage(value,proto.models.Header.deserializeBinaryFromReader);
      msg.addHeaders(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEntryData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.models.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.models.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.models.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.models.Header.serializeBinaryToWriter
    );
  }
  f = message.getEntryData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.models.Entry.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.models.Entry.prototype.setKind = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Header headers = 2;
 * @return {!Array<!proto.models.Header>}
 */
proto.models.Entry.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.models.Header>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.models.Header, 2));
};


/** @param {!Array<!proto.models.Header>} value */
proto.models.Entry.prototype.setHeadersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.models.Header=} opt_value
 * @param {number=} opt_index
 * @return {!proto.models.Header}
 */
proto.models.Entry.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.models.Header, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.models.Entry.prototype.clearHeadersList = function() {
  this.setHeadersList([]);
};


/**
 * optional bytes entry_data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.models.Entry.prototype.getEntryData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes entry_data = 3;
 * This is a type-conversion wrapper around `getEntryData()`
 * @return {string}
 */
proto.models.Entry.prototype.getEntryData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEntryData()));
};


/**
 * optional bytes entry_data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEntryData()`
 * @return {!Uint8Array}
 */
proto.models.Entry.prototype.getEntryData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEntryData()));
};


/** @param {!(string|Uint8Array)} value */
proto.models.Entry.prototype.setEntryData = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.models.Payload.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.models.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.models.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.models.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ttl: jspb.Message.getFieldWithDefault(msg, 2, 0),
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.models.Entry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.models.Payload}
 */
proto.models.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.models.Payload;
  return proto.models.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.models.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.models.Payload}
 */
proto.models.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    case 3:
      var value = new proto.models.Entry;
      reader.readMessage(value,proto.models.Entry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.models.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.models.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.models.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.models.Entry.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.models.Payload.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.models.Payload.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 ttl = 2;
 * @return {number}
 */
proto.models.Payload.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.models.Payload.prototype.setTtl = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Entry entries = 3;
 * @return {!Array<!proto.models.Entry>}
 */
proto.models.Payload.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.models.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.models.Entry, 3));
};


/** @param {!Array<!proto.models.Entry>} value */
proto.models.Payload.prototype.setEntriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.models.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.models.Entry}
 */
proto.models.Payload.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.models.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.models.Payload.prototype.clearEntriesList = function() {
  this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.models.AddressMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.models.AddressMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.models.AddressMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.AddressMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: msg.getPubKey_asB64(),
    signature: msg.getSignature_asB64(),
    scheme: jspb.Message.getFieldWithDefault(msg, 3, 0),
    serializedPayload: msg.getSerializedPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.models.AddressMetadata}
 */
proto.models.AddressMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.models.AddressMetadata;
  return proto.models.AddressMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.models.AddressMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.models.AddressMetadata}
 */
proto.models.AddressMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!proto.models.AddressMetadata.SignatureScheme} */ (reader.readEnum());
      msg.setScheme(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSerializedPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.models.AddressMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.models.AddressMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.models.AddressMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.AddressMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getScheme();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSerializedPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.models.AddressMetadata.SignatureScheme = {
  SCHNORR: 0,
  ECDSA: 1
};

/**
 * optional bytes pub_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.models.AddressMetadata.prototype.getPubKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes pub_key = 1;
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {string}
 */
proto.models.AddressMetadata.prototype.getPubKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubKey()));
};


/**
 * optional bytes pub_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubKey()`
 * @return {!Uint8Array}
 */
proto.models.AddressMetadata.prototype.getPubKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.models.AddressMetadata.prototype.setPubKey = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.models.AddressMetadata.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.models.AddressMetadata.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.models.AddressMetadata.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.models.AddressMetadata.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional SignatureScheme scheme = 3;
 * @return {!proto.models.AddressMetadata.SignatureScheme}
 */
proto.models.AddressMetadata.prototype.getScheme = function() {
  return /** @type {!proto.models.AddressMetadata.SignatureScheme} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.models.AddressMetadata.SignatureScheme} value */
proto.models.AddressMetadata.prototype.setScheme = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bytes serialized_payload = 4;
 * @return {!(string|Uint8Array)}
 */
proto.models.AddressMetadata.prototype.getSerializedPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes serialized_payload = 4;
 * This is a type-conversion wrapper around `getSerializedPayload()`
 * @return {string}
 */
proto.models.AddressMetadata.prototype.getSerializedPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSerializedPayload()));
};


/**
 * optional bytes serialized_payload = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerializedPayload()`
 * @return {!Uint8Array}
 */
proto.models.AddressMetadata.prototype.getSerializedPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSerializedPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.models.AddressMetadata.prototype.setSerializedPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


goog.object.extend(exports, proto.models);
