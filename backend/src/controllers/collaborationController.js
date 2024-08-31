const Invitation = require('../models/invitation.models');
const Itinerary = require('../models/Itinerary.models');
const SharedItinerary = require('../models/SharedItinerary.models');

exports.sendInvitation = async (req, res) => {
    const { inviteeEmail, message } = req.body;
    try {
        const invitation = new Invitation({
            itinerary: req.params.id,
            inviter: req.user.id,
            inviteeEmail,
            message
        });
        await invitation.save();
        res.status(201).json(invitation);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getCollaborators = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id).populate('collaborators');
        res.json(itinerary.collaborators);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.shareItinerary = async (req, res) => {
    const { shareableLink, expiryDate } = req.body;
    try {
        const sharedItinerary = new SharedItinerary({
            itinerary: req.params.id,
            shareableLink,
            sharedBy: req.user.id,
            expiryDate
        });
        await sharedItinerary.save();
        res.status(201).json(sharedItinerary);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
