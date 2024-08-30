const express = require('express');
const {
    sendInvitation,
    getCollaborators,
    shareItinerary
} = require('../controllers/collaborationController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/:id/invite', authMiddleware, sendInvitation);
router.get('/:id/collaborators', authMiddleware, getCollaborators);
router.post('/:id/share', authMiddleware, shareItinerary);

module.exports = router;
