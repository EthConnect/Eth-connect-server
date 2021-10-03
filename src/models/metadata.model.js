const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const metadataSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: false,
      trim: false,
    },
    walletAddress: {
      type: String,
      required: true,
      trim: true,
    },
    publicKey: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
  },
);


// add plugin that converts mongoose to json
// metadataSchema.plugin(toJSON);
// metadataSchema.plugin(paginate);


/**
 * @typedef Metadata
 */
const Metadata = mongoose.model('Metadata', metadataSchema);

module.exports = Metadata;
