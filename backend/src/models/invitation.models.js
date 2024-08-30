const mongoose = require('mongoose');

const InvitationSchema = new mongoose.Schema({
    itinerary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Itinerary',
        required: true
    },
    inviter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    inviteeEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Declined'],
        default: 'Pending'
    },
    message: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Invitation = mongoose.model('Invitation', InvitationSchema);
module.exports = Invitation;
