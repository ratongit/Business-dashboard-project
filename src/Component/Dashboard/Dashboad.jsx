import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import DashboardMainSideber from './DashboardMainSideber';
import DashBoardMainContent from './DashBoardContent';
import { FaIndent, FaOutdent } from 'react-icons/fa';

const Dashboard = () => {
  const [dashboardVisible, setDashboardVisible] = useState(true);
  const [dashboardVisibl] = useState(true);

  const toggleDashboardContent = () => {
    setDashboardVisible(!dashboardVisibl)
  };

  const dashboardContent = (<> <DashBoardMainContent></DashBoardMainContent> </>);

  return (
    <>
      <div className='sm:hidden '>
        <Navbar toggleDashboard={() => setDashboardVisible(!dashboardVisible)} dashboardVisible={dashboardVisible} />
      </div>

      <div className={`drawer ${dashboardVisible ? 'drawer-open ' : ''} `}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={dashboardVisible} />
        <div className="drawer-content">

          <div className='max-sm:hidden'>
            <Navbar toggleDashboard={() => setDashboardVisible(!dashboardVisible)} dashboardVisible={dashboardVisible} />
          </div>

          {!dashboardVisible && (<ul className='ps-32 max-md:hidden max-sm:-ms-28'>{dashboardContent}</ul>)}
          {dashboardVisible && (<ul className='max-md:hidden max-sm:-ms-40'> {dashboardContent}</ul>)}

          {/* <div className={`md:hidden ${dashboardVisible ? " overflow-hidden -ms-60" : ""}`} onClick={toggleDashboardContent}>{dashboardContent}</div> */}
        </div>

        <div className="drawer-side border-e-[1px] border-gray-700">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 max-sm:w-48  h-full  bg-navber text-white">
            <hr className='absolute border-[1px] border-gray-700 w-72  -ms-12  mt-[56px] max-sm:hidden' />
            <DashboardMainSideber></DashboardMainSideber>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
