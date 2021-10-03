const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const contactInfoSchema = mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    // metadata: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: 'Metadata',
    //   required: true,
    // },
    metadata: {
      type: Object,
      required: true,
    },
    signature: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


// add plugin that converts mongoose to json
contactInfoSchema.plugin(toJSON);
contactInfoSchema.plugin(paginate);


/**
 * @typedef ContactInfo
 */
const ContactInfo = mongoose.model('ContactInfo', contactInfoSchema);

module.exports = ContactInfo;
