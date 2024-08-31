const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    source: {
        type: String, // Source API or external reference
        required: true
    }
}, {
    timestamps: true
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
