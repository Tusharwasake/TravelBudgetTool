import React, { useState } from 'react';

const Profile = () => {
  // Initialize state for user profile
  const [user, setUser] = useState({
    name: 'John Doe',
    bio: 'Travel enthusiast & budget planner',
    location: 'New York, USA',
    email: 'john@example.com',
    phone: '+1 (555) 000-0000',
    memberSince: 'January 2024',
    preferredCurrency: 'USD ($)',
    totalTrips: 12,
    budgetAdherence: 85,
    savingsRate: 15,
    recentActivity: [
      {
        icon: 'fas fa-receipt',
        text: 'Added new expense',
        time: '2 hours ago',
        bgColor: 'bg-primary-100',
        textColor: 'text-primary-600',
      },
      {
        icon: 'fas fa-check',
        text: 'Updated budget',
        time: '1 day ago',
        bgColor: 'bg-green-100',
        textColor: 'text-green-600',
      },
    ],
  });

  // Handle input changes for editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Save profile changes (for demo, just logging the updated user object)
  const handleSave = () => {
    console.log('Profile saved:', user);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
      {/* Profile Info */}
      <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&size=128"
            className="w-32 h-32 rounded-full"
            alt="Profile Photo"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="bg-transparent border-0 outline-none text-2xl font-semibold"
              />
            </h3>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="text-gray-600 p-2 bg-transparent border-0 outline-none w-full"
              rows="3"
            ></textarea>
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleChange}
                className="bg-transparent border-0 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-600">Email</dt>
              <dd className="text-gray-900 mt-1">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none text-gray-900"
                />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Phone</dt>
              <dd className="text-gray-900 mt-1">
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none text-gray-900"
                />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Member Since</dt>
              <dd className="text-gray-900 mt-1">{user.memberSince}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Preferred Currency</dt>
              <dd className="text-gray-900 mt-1">{user.preferredCurrency}</dd>
            </div>
          </dl>
        </div>

     
      </div>

      {/* Stats */}
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Statistics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Total Trips</span>
                <span>{user.totalTrips}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary-600 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Budget Adherence</span>
                <span>{user.budgetAdherence}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: `${user.budgetAdherence}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Savings Rate</span>
                <span>{user.savingsRate}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${user.savingsRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {user.recentActivity.map((activity, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div
                  className={`w-8 h-8 ${activity.bgColor} ${activity.textColor} rounded-full flex items-center justify-center`}
                >
                  <i className={activity.icon}></i>
                </div>
                <div>
                  <p className="text-sm font-medium">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
