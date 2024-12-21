import React, { useState, useEffect } from "react";

const ExpenseTracker = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedDateRange, setSelectedDateRange] = useState("Last 7 days");
  const [selectedSortBy, setSelectedSortBy] = useState("Most Recent");
  const [expenses, setExpenses] = useState([
    {
      date: "2024-01-15",
      description: "Hotel Booking",
      category: "Accommodation",
      amount: 420.0,
    },
    {
      date: "2024-01-16",
      description: "Taxi Ride",
      category: "Transport",
      amount: 30.0,
    },
    {
      date: "2024-01-10",
      description: "Groceries",
      category: "Food",
      amount: 50.0,
    },
    {
      date: "2024-01-12",
      description: "Flight Ticket",
      category: "Transport",
      amount: 200.0,
    },
    {
      date: "2024-01-14",
      description: "Dinner",
      category: "Food",
      amount: 60.0,
    },
  ]);
  const categories = [
    "Food",
    "Transport",
    "Bills",
    "Entertainment",
    "Accommodation",
    "Healthcare",
    "Shopping",
    "Utilities",
    "Others",
  ];

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    if (selectedCategory === "All Categories") {
      setFilteredExpenses(expenses);
    } else {
      const filtered = expenses.filter(
        (expense) => expense.category === selectedCategory
      );
      setFilteredExpenses(filtered);
    }
  }, [selectedCategory, expenses]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setShowAddExpense(false);
  };

  const handleSortExpenses = () => {
    let sortedExpenses = [...filteredExpenses];

    if (selectedSortBy === "Most Recent") {
      sortedExpenses = sortedExpenses.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (selectedSortBy === "Amount (High to Low)") {
      sortedExpenses = sortedExpenses.sort((a, b) => b.amount - a.amount);
    } else if (selectedSortBy === "Amount (Low to High)") {
      sortedExpenses = sortedExpenses.sort((a, b) => a.amount - b.amount);
    }

    setFilteredExpenses(sortedExpenses);
  };

  useEffect(() => {
    handleSortExpenses();
  }, [selectedSortBy, filteredExpenses]);

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold">Expense Tracker</h2>
        <button
          onClick={() => setShowAddExpense(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center"
        >
          <span className="mr-2">➕</span>
          Add Expense
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <select
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Custom Range</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
              value={selectedSortBy}
              onChange={(e) => setSelectedSortBy(e.target.value)}
            >
              <option>Most Recent</option>
              <option>Amount (High to Low)</option>
              <option>Amount (Low to High)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <select
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Description
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Category
                </th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                  Amount
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{expense.date}</td>
                  <td className="py-3 px-4">{expense.description}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {expense.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">{`$${expense.amount.toFixed(
                    2
                  )}`}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-800 ml-2">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div
            className="bg-white rounded-lg w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add New Expense</h3>
              <button
                onClick={() => setShowAddExpense(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newExpense = {
                  date: e.target.date.value,
                  description: e.target.description.value,
                  category: e.target.category.value,
                  amount: parseFloat(e.target.amount.value),
                };
                handleAddExpense(newExpense);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                  placeholder="Enter description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">
                    {selectedCurrency === "USD"
                      ? "$"
                      : selectedCurrency === "EUR"
                      ? "€"
                      : "£"}
                  </span>
                  <input
                    type="number"
                    name="amount"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 pl-7"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddExpense(false)}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Save Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
