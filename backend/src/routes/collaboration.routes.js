const express = require('express');
const {
    sendInvitation,
    getCollaborators,
    shareItinerary
} = require('../controllers/collaborationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:id/invite', authMiddleware, sendInvitation);
router.get('/:id/collaborators', authMiddleware, getCollaborators);
router.post('/:id/share', authMiddleware, shareItinerary);

module.exports = router;
