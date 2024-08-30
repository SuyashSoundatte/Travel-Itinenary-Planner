const mongoose = require('mongoose');

const SharedItinerarySchema = new mongoose.Schema({
    itinerary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Itinerary',
        required: true
    },
    shareableLink: {
        type: String,
        required: true,
        unique: true
    },
    sharedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    expiryDate: {
        type: Date
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const SharedItinerary = mongoose.model('SharedItinerary', SharedItinerarySchema);
module.exports = SharedItinerary;
