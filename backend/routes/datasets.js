const express = require('express');
const router = express.Router();
const { getAll, getById, create } = require('../controllers/datasetController');
const auth = require('../middleware/auth'); // You will need to create this middleware

// Public routes
router.get('/', getAll);
router.get('/:id', getById);

// Protected route
router.post('/', auth, create);

module.exports = router;
