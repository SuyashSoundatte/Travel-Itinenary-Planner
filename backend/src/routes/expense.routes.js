const express = require('express');
const {
    addExpense,
    getExpenses,
    deleteExpense
} = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:id/expense', authMiddleware, addExpense);
router.get('/:id/expense', authMiddleware, getExpenses);
router.delete('/:id/expense/:expenseId', authMiddleware, deleteExpense);

module.exports = router;
