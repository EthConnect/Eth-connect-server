const httpStatus = require('http-status');
const { ContactInfo } = require('../models');
const ApiError = require('../utils/ApiError');

const registerMetadata = async (contactInfo) => {
  let address = contactInfo.address;
  let existing = await ContactInfo.findOne({ address });
  if (existing) {
    if ((new Date(contactInfo.metadata.date)) > (new Date(existing.metadata.date))) {
      await ContactInfo.replaceOne({ _id: existing._id }, contactInfo);
    } else {
      return { status: 'More recent metadata exists. Your contact-info is not updated', data: existing }
    }
  } else {
    await ContactInfo.create(contactInfo);
  }
};

const fetchMetadata = async (address) => {
  // console.log('fetchMetadata', address);
  return await ContactInfo.findOne({ address });
};


module.exports = {
  registerMetadata,
  fetchMetadata
};
