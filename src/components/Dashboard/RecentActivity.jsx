import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const mockActivity = [
  // {
  //   id: 1,
  //   type: "Airtime",
  //   amount: "-₦500",
  //   status: "Success",
  //   date: "Apr 6, 2025",
  //   icon: <FiTrendingDown />,
  //   color: "text-red-500",
  // },
  // {
  //   id: 2,
  //   type: "Trade",
  //   amount: "+₦12,000",
  //   status: "Completed",
  //   date: "Apr 5, 2025",
  //   icon: <FiTrendingUp />,
  //   color: "text-green-500",
  // },
  // {
  //   id: 3,
  //   type: "Data",
  //   amount: "-₦1,000",
  //   status: "Success",
  //   date: "Apr 4, 2025",
  //   icon: <FiTrendingDown />,
  //   color: "text-red-500",
  // },
  // {
  //   id: 4,
  //   type: "Gift Card",
  //   amount: "+₦8,000",
  //   status: "Completed",
  //   date: "Apr 3, 2025",
  //   icon: <FiTrendingUp />,
  //   color: "text-green-500",
  // },
  // {
  //   id: 5,
  //   type: "Electricity",
  //   amount: "-₦2,300",
  //   status: "Success",
  //   date: "Apr 2, 2025",
  //   icon: <FiTrendingDown />,
  //   color: "text-red-500",
  // },
];

const RecentActivity = () => {
  const hasActivity = mockActivity.length > 0;

  return (
    <div className="bg-[#1f1f1f] p-4 rounded-xl shadow-sm text-white">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

      {hasActivity ? (
        <ul className="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {mockActivity.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-gray-700 pb-2"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`text-xl bg-black/30 p-2 rounded-full ${item.color}`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.type}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${item.color}`}>{item.amount}</p>
                <p className="text-xs text-gray-400">{item.status}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500 text-center py-6">
          No recent activity to display.
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
