const express = require('express');
const {
    createItinerary,
    getItinerary,
    updateItinerary,
    deleteItinerary
} = require('../controllers/itineraryController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/', authMiddleware, createItinerary);
router.get('/:id', authMiddleware, getItinerary);
router.put('/:id', authMiddleware, updateItinerary);
router.delete('/:id', authMiddleware, deleteItinerary);

module.exports = router;
