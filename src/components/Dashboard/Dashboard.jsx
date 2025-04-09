import React, { useState } from "react";
import Sidebar from "../Sidebar";
import BalanceCard from "../../components/Dashboard/BalanceCard";
import ReferralCard from "../../components/Dashboard/ReferralCard";
import QuickActions from "../../components/Dashboard/QuickActions";
import PromoBanner from "../../components/Dashboard/PromoBanner";
import ScheduledActivity from "../../components/Dashboard/ScheduledActivity";
import RecentActivity from "../../components/Dashboard/RecentActivity";
import JoinFamilySection from "../../components/Dashboard/JoinFamilySection";
import DashboardHeader from "../../components/DashbardHeader";
import DashBoardFooter from "../../components/DashBoardFooter";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#1a1a1a] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="ml-0 md:ml-0 flex flex-col w-full h-screen overflow-y-auto">
        <div className="flex-grow p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
          {/* 1. Header */}
          <DashboardHeader setSidebarOpen={setSidebarOpen} />

          {/* 2. Top Cards (equal height on desktop) */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-4">
            <div className="h-full">
              <BalanceCard className="h-full" />
            </div>
            <div className="h-full">
              <ReferralCard className="h-full" totalReferrals={0} amountEarned="₦0.00" />
            </div>
            <div className="h-full">
              <PromoBanner className="h-full" />
            </div>
          </div>

          {/* Mobile: Balance Card */}
          <div className="md:hidden">
            <BalanceCard />
          </div>

          {/* 3. Quick Actions */}
          <QuickActions />

          {/* 4. Recent Activity (Mobile) */}
          <div className="md:hidden">
            <RecentActivity />
          </div>

          {/* 5. Promo Banner (Mobile) */}
          <div className="md:hidden">
            <PromoBanner />
          </div>

          {/* 6. Scheduled Activity (Mobile) */}
          <div className="md:hidden">
            <ScheduledActivity />
          </div>

          {/* Desktop: Side-by-side Recent + Scheduled */}
          <div className="hidden md:flex gap-4">
            <div className="w-1/2">
              <RecentActivity />
            </div>
            <div className="w-1/2">
              <ScheduledActivity />
            </div>
          </div>

          {/* 7. Join Family */}
          <JoinFamilySection className="mt-10" />
        </div>

        {/* 8. Footer */}
        <DashBoardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
