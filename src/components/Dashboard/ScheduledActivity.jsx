// src/components/Dashboard/ScheduledActivity.jsx
import React from "react";
import { FiClock, FiZap, FiRepeat } from "react-icons/fi";

const mockSchedule = [
  {
    id: 1,
    title: "DSTV Subscription",
    date: "Apr 10, 2025 - 9:00 AM",
    status: "Scheduled",
    icon: <FiZap />,
    color: "text-yellow-400",
  },
  {
    id: 2,
    title: "MTN Data Top-up",
    date: "Apr 12, 2025 - 8:30 AM",
    status: "Scheduled",
    icon: <FiRepeat />,
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Electricity Bill",
    date: "Apr 15, 2025 - 6:00 PM",
    status: "Auto-debit",
    icon: <FiZap />,
    color: "text-red-400",
  },
];

const ScheduledActivity = () => {
  const hasItems = mockSchedule.length > 0;

  return (
    <div className="bg-[#1f1f1f] p-4 rounded-xl shadow-sm text-white">
      <h3 className="text-lg font-semibold mb-4">Scheduled Activity</h3>

      {hasItems ? (
        <ul className="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {mockSchedule.map((item) => (
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
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
              <div className="text-xs text-right text-gray-400">{item.status}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500 text-center py-6">
          No scheduled activity found.
        </div>
      )}
    </div>
  );
};

export default ScheduledActivity;
