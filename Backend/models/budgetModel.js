import mongoose, { Schema } from "mongoose";

const budgetSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: Boolean,
    },
    numberOfDays: {
      type: Number,
      required: true,
      min: 1, // Minimum value must be 1
    },
    totalBudget: {
      type: Number,
      required: true,
      min: 0, // Budget cannot be negative
    },
    expenses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expense", // Reference to Expense model
      },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const budgetModel = mongoose.model("Budget", budgetSchema);

export { budgetModel };
