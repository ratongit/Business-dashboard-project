import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import DashboardMainSideber from './DashboardMainSideber';
import DashBoardMainContent from './DashBoardContent';

const Dashboard = () => {
  const [dashboardVisible, setDashboardVisible] = useState(true);
  const [dashboardVisibl, setDashboardVisibl] = useState(true);


  const toggleDashboardContent = () => {
    setDashboardVisible(!dashboardVisibl)
  };

  const dashboardContent = (
    <>
      {/* Page content here */}
      <DashBoardMainContent></DashBoardMainContent>
    </>
  );

  return (
    <>
      <div className='sm:hidden '>
        <Navbar toggleDashboard={() => setDashboardVisible(!dashboardVisible)} dashboardVisible={dashboardVisible} />
      </div>

      <div className={`drawer ${dashboardVisible ? 'drawer-open ' : ''} `}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={dashboardVisible} />
        <div className="drawer-content">
          <div className='max-sm:hidden '>
            <Navbar toggleDashboard={() => setDashboardVisible(!dashboardVisible)} dashboardVisible={dashboardVisible} />
          </div>

          {/* Page content here */}
          {!dashboardVisible && (
            <ul className='ps-32 max-md:hidden'>
              {dashboardContent}
            </ul>
          )}
          {dashboardVisible && (
            <ul className='max-md:hidden'>
              {dashboardContent}
            </ul>
          )}
          <div className={`md:hidden h-[10000px] ${dashboardVisible ? " overflow-hidden flex flex-wrap" : ""}`} onClick={toggleDashboardContent}>
            {dashboardContent}
          </div>

        </div>

        <div className="drawer-side border-e-[1px] border-gray-700">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full  bg-navber text-white">
            {/* Sidebar content here */}
            <DashboardMainSideber></DashboardMainSideber>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
