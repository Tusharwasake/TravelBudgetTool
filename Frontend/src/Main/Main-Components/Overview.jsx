import { Plus } from "lucide-react";
import React from "react";

function Overview() {
  return (
    <>
      <div class="flex justify-between items-center">
        <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center outline outline-1 outline-black mb-3 bg-black ">
          <Plus />
          Set New Budget
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Total Budget</h3>
            <i class="fas fa-wallet text-primary-600"></i>
          </div>
          <p class="text-3xl font-bold text-gray-900">$5,000</p>
          <p class="text-sm text-gray-600 mt-2">Current Trip Budget</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Spent</h3>
            <i class="fas fa-chart-line text-secondary-600"></i>
          </div>
          <p class="text-3xl font-bold text-gray-900">$2,345</p>
          <p class="text-sm text-gray-600 mt-2">47% of total budget</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Remaining</h3>
            <i class="fas fa-piggy-bank text-accent-600"></i>
          </div>
          <p class="text-3xl font-bold text-gray-900">$2,655</p>
          <p class="text-sm text-gray-600 mt-2">53% remaining</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Daily Avg</h3>
            <i class="fas fa-calculator text-primary-600"></i>
          </div>
          <p class="text-3xl font-bold text-gray-900">$167</p>
          <p class="text-sm text-gray-600 mt-2">Last 7 days</p>
        </div>
      </div>
    </>
  );
}

export default Overview;
