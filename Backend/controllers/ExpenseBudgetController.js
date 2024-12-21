import { budgetModel } from "../models/budgetModel.js";
import { expenseModel } from "../models/expenseModel.js";


const createBudget = async (req, res) => {
  try {
    const { id: userId } = req.user; // Extract `userId` from `req.user`

    console.log("Extracted userId:", userId); // Debug log

    if (!userId) {
      return res.status(400).json({ message: "Invalid user" });
    }

    const { city, numberOfDays, totalBudget , status} = req.body;

    if (!city || !numberOfDays || !totalBudget) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const budget = await budgetModel.create({
      userId, // Ensure this is passed correctly
      city,
      numberOfDays,
      totalBudget,
      status
    });

    res.status(201).json({ message: "Budget created successfully", budget });
  } catch (error) {
    console.error("Error creating budget:", error.message); // Debug log
    res.status(500).json({ message: error.message });
  }
};

export { createBudget };

// Retrieve all budgets for a user
const getBudgets = async (req, res) => {
  try {
    const { userId } = req.user; // Populated by authentication middleware

    // Find budgets for the user
    const budgets = await budgetModel.find({ userId });

    res.status(200).json({ budgets });
  } catch (error) {
    console.error("Error fetching budgets:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Add an expense to a budget
const addExpenseToBudget = async (req, res) => {
  try {
    const { budgetId, date, description, category, amount } = req.body;

    // Validate input
    if (!budgetId || !date || !description || !category || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the budget exists
    const budget = await budgetModel.findById(budgetId);
    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    // Create the expense
    const expense = await expenseModel.create({
      budgetId,
      date,
      description,
      category,
      amount,
    });

    // Add the expense reference to the budget's expenses array
    budget.expenses.push(expense._id);
    await budget.save();

    res.status(201).json({ message: "Expense added successfully", expense });
  } catch (error) {
    console.error("Error adding expense:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get a budget with its expenses
const getBudgetWithExpenses = async (req, res) => {
  try {
    const { budgetId } = req.params;

    // Find the budget and populate its expenses
    const budget = await budgetModel.findById(budgetId).populate("expenses"); // Populate the `expenses` array with full Expense documents

    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json({ budget });
  } catch (error) {
    console.error("Error fetching budget with expenses:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export {  getBudgets, addExpenseToBudget, getBudgetWithExpenses };
