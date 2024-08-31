const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    },
    dates: {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true }
    },
    activities: [{
        type: String,
        trim: true
    }],
    budget: {
        type: Number,
        required: true
    },
    weather: {
        type: Map,
        of: String,
        default: {}
    },
    localEvents: [{
        name: String,
        date: Date,
        location: String
    }],
    collaborators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

const Itinerary = mongoose.model('Itinerary', ItinerarySchema);
module.exports = Itinerary;
