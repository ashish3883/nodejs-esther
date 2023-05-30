const express = require('express');
const router = express.Router();
const productController = require('../controller/product');


router.get('',productController.getListController);
router.post('',productController.postListController);

module.exports = router;