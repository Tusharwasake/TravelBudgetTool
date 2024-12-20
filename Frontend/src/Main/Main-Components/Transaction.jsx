import React from "react";

function Transaction() {
  return (
    <div class="bg-white border border-gray-200 rounded-lg p-6 mt-16">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold">Recent Transactions</h3>
        <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                Date
              </th>
              <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                Description
              </th>
              <th class="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                Category
              </th>
              <th class="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-100">
              <td class="py-3 px-4 text-sm">Jan 15, 2024</td>
              <td class="py-3 px-4 text-sm">Hotel Booking</td>
              <td class="py-3 px-4 text-sm">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  Accommodation
                </span>
              </td>
              <td class="py-3 px-4 text-sm text-right">$420.00</td>
            </tr>
            <tr class="border-b border-gray-100">
              <td class="py-3 px-4 text-sm">Jan 14, 2024</td>
              <td class="py-3 px-4 text-sm">Restaurant Dinner</td>
              <td class="py-3 px-4 text-sm">
                <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Food
                </span>
              </td>
              <td class="py-3 px-4 text-sm text-right">$85.50</td>
            </tr>
            <tr class="border-b border-gray-100">
              <td class="py-3 px-4 text-sm">Jan 14, 2024</td>
              <td class="py-3 px-4 text-sm">Taxi Ride</td>
              <td class="py-3 px-4 text-sm">
                <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                  Transportation
                </span>
              </td>
              <td class="py-3 px-4 text-sm text-right">$25.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction;
