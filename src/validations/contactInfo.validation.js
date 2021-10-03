const Joi = require('joi');

const registerMetadata = {
  body: Joi.object().keys({
    address: Joi.string().required(),
    metadata: Joi.object().keys({
      walletAddress: Joi.string().required(),
      content: Joi.string().optional(),
      publicKey: Joi.string().required(),
      date: Joi.string().required(),
    }).required(),
    signature: Joi.string().required()
  }),
};

module.exports = {
  registerMetadata
};
