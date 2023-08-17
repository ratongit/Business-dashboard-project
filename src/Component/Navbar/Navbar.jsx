import React from 'react';
import "./Navber.css";
import { FaAccusoft, FaHome, FaOutdent, FaPrescription } from 'react-icons/fa'
import logo from './../../assets/businesslogo.png'

const Navbar = ({ toggleDashboard, dashboardVisible }) => {
  const navItem = (
    <>
      <li><a>Homepage</a></li>
      <li><a>Portfolio</a></li>
      <li><a>About</a></li>
    </>
  );



  return (
    <>
      <div className="navbar  h-[74px] bg-navber">
        <div className="navbar-start">
          <div className="dropdown ">

            <button
              className="btn btn-ghost btn-circle drawer-button "
              onClick={toggleDashboard}
              >
              <FaOutdent className='border-[1px] -me-7 border-gray-500 w-14 h-10 py-2 rounded-md  ' style={{fontSize:'40px'}}></FaOutdent>

            </button>
            {!dashboardVisible && (<div className=' gap-pointBg absolute w-[120px] top-14'>
<div className='border-e-[1px] h-20 absolute -top-16  border-gray-700 left-[83px]'>  
  </div>
           <div  className='bgGap w-32 h-[10px] border-b-[1px] border-gray-700'></div>

              {!dashboardVisible && (

                <ul className='max-md:hidden relative bg-navberSideber  -ms-4 bg-navber h-[100vh] flex flex-col gap-3  '>
                  {/* <hr className='w-[150px] mt-[9px] border-gray-700'/> */}
                  <div className='nav-item'>
                    <span className='icon '><FaHome></FaHome>  </span>
                    <span className='text'>Home</span>
                  </div>
                  <div className='nav-item'>
                    <span className='icon'> <FaAccusoft></FaAccusoft>  </span>
                    <span className='text'>About</span>
                  </div>
                  <div className='nav-item'>
                    <span className='icon'><FaPrescription></FaPrescription></span>
                    <span className='text'>Profile</span>
                  </div>
                </ul>
              )}

            </div>
            )}


          </div>
        </div>

        {!dashboardVisible &&(
        <div className="navbar-center">

          <img src={logo} className='w-44  -m-5 -mt-9 ' alt="" />
          <h3 className='text-3xl -mt-6 -ms-5 font-semibold text-indigo-200'>
            <span className='text-indigo-400 text-4xl'>O</span>
            <span >c</span>
            <span>t</span>
            <span>o</span>
            <span className='text-yellow-400'>P</span>
            <span className='text-yellow-200'>u</span>
            <span className='text-yellow-200'>s</span>

          </h3>
        </div>)}


        <div className="navbar-end ">

          <li> hi </li>

        </div>
      </div>
    </>
  );
};

export default Navbar;
