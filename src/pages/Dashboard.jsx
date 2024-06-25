import React from 'react';

const Dashboard = () => {
    const users = [
        { id: 1, name: 'Youth', role: '30/06/2024', status: 'Drum' },
        { id: 2, name: 'Ibadah Raya', role: '31/06/2024', status: 'WL' },
        // Add more users as needed
      ];
    
      const recentActivities = [
        { id: 1, description: 'User John Doe logged in.', timestamp: '5 minutes ago' },
        { id: 2, description: 'New order placed by Jane Smith.', timestamp: '1 hour ago' },
        // Add more activities as needed
      ];
  return (
    <div className="bg-white min-h-screen py-4 px-2 sm:px-6 lg:px-8">
      <div className="container mx-auto py-10">
        

        {/* Main content */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome! Hosea</h2>
          <p className="text-gray-600">
            Welcome to the dashboard. Here you can manage users, view recent activities, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Jemaat</h3>
                <p className="text-gray-800">300 Orang</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-800">Pelayan Tuhan</h3>
                <p className="text-gray-800">45 Orang</p>
              </div>
              {/* Add more statistics as needed */}
            </div>
          </div>
          

          {/* Right Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2">
                <p className="text-sm text-gray-600">User Hosea logged in.</p>
                <p className="text-xs text-gray-400">5 minutes ago</p>
              </li>
              <li className="py-2">
                <p className="text-sm text-gray-600">Admin has added a new schedule.</p>
                <p className="text-xs text-gray-400">1 hour ago</p>
              </li>
              {/* Add more recent activities as needed */}
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Jadwal Pelayanan 🫵</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-2 px-4">Ibadah</th>
                  <th className="text-left py-2 px-4">Tanggal</th>
                  <th className="text-left py-2 px-4">Pelayanan</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border-t py-2 px-4">{user.name}</td>
                    <td className="border-t py-2 px-4">{user.role}</td>
                    <td className="border-t py-2 px-4">{user.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
