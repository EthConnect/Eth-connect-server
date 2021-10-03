const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const contactInfoValidation = require('../../validations/contactInfo.validation');
const ethconnectController = require('../../controllers/ethconnect.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(contactInfoValidation.registerMetadata), ethconnectController.registerMetadata)

router
  .route('/:address')
  .get(ethconnectController.fetchMetadata)
  .post(validate(contactInfoValidation.registerMetadata), ethconnectController.registerMetadata)

router.post('/registerMetadata', validate(contactInfoValidation.registerMetadata), ethconnectController.registerMetadata)
router.get('/fetchMetadata', ethconnectController.fetchMetadata)
module.exports = router;