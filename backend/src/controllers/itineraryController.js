const Itinerary = require('../models/Itinerary');

exports.createItinerary = async (req, res) => {
    const { destination, dates, activities, budget } = req.body;
    try {
        const itinerary = new Itinerary({
            user: req.user.id,
            destination,
            dates,
            activities,
            budget
        });
        await itinerary.save();
        res.status(201).json(itinerary);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id).populate('user');
        if (!itinerary) {
            return res.status(404).json({ error: 'Itinerary not found' });
        }
        res.json(itinerary);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!itinerary) {
            return res.status(404).json({ error: 'Itinerary not found' });
        }
        res.json(itinerary);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.findByIdAndDelete(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ error: 'Itinerary not found' });
        }
        res.json({ message: 'Itinerary deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
