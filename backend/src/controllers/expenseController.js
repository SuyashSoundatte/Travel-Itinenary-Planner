const Expense = require('../models/expense.models');

exports.addExpense = async (req, res) => {
    const { description, amount } = req.body;
    try {
        const expense = new Expense({
            itinerary: req.params.id,
            description,
            amount
        });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ itinerary: req.params.id });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.expenseId);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
