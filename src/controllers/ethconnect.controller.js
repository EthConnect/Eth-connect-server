const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { metadataService } = require('../services');
const cryptoUtil = require('../utils/cryptoUtil');

const registerMetadata = catchAsync(async (req, res) => {
  let validationRes = await cryptoUtil.validateSignature(req.body);
  if (validationRes.verified) {
    try {
      let res2 = await metadataService.registerMetadata(req.body);
      res.send(res2);
    }
    catch (e) {
      console.error('registerMetadata-Save', e);
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Unable to save data due to an internal error');
    }

  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, validationRes);
  }
});

const fetchMetadata = catchAsync(async (req, res) => {
  const metadata = await metadataService.fetchMetadata(req.query.address);
  res.send(metadata);
});


module.exports = {
  registerMetadata,
  fetchMetadata,
};
