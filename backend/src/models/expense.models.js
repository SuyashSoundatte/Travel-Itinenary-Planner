const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    itinerary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Itinerary',
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense;
