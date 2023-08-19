import React from 'react';
import "./Navber.css";
import { FaAccusoft, FaHome, FaOutdent,FaIndent, FaPrescription } from 'react-icons/fa'
import logo from './../../assets/businesslogo.png'

const Navbar = ({ toggleDashboard, dashboardVisible }) => {

  const navEndContent = <div className='max-md:hidden'>
     <h1>hello navend</h1>
    </div>


  return (
    <>
      <div className="navbar  h-[74px] bg-navber pt-2">
        <div className="navbar-start">
          <div className="dropdown ">

            <button
              className="btn btn-ghost btn-circle drawer-button " >
            { !dashboardVisible?
              <FaOutdent onClick={toggleDashboard} className='border-[1px] -me-7 border-gray-500 w-14 h-10 py-2 rounded-md  ' style={{ fontSize: '40px' }}></FaOutdent>
              :
              <FaIndent onClick={toggleDashboard} className='border-[1px] -me-7 border-gray-500 w-14 h-10 py-2 rounded-md  ' style={{ fontSize: '40px' }}> style={{ fontSize: '40px' }} ></FaIndent> 
            }
            </button>


            {!dashboardVisible && (<div className=' gap-pointBg absolute w-[120px] top-14 max-md:hidden'>
              <div className='border-e-[1px] h-20 absolute -top-16  border-gray-700 left-[83px]'></div>
              <div className='bgGap -ms-5  w-36    h-[10px]  border-b-[1px] border-gray-700 max-md:hidden'></div>

              {!dashboardVisible ?

                <ul className='max-sm:-ms-40 relative bg-navberSideber  -ms-4 bg-navber h-[100vh] flex flex-col gap-3  '>
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
              : ""}
            </div>
            )}

             {!dashboardVisible && (
              <div className="Company-logo flex  -mt-11 md:ms-24 ms-16    ">
                <img src={logo} className='w-40 max-md:w-32 max-md:-mt-7  -m-5 -mt-10 ' alt="" />
                <div className=' '>
                  <h3 className='text-3xl -mt-1 -mb-3 -ms-5 max-md:-ms-3  font-semibold text-indigo-200 w-40 '>
                    <span className='text-indigo-400 max-md:text-3xl text-4xl'>O</span><span >c</span><span>t</span><span>o</span><span className='text-yellow-400'>P</span><span className='text-yellow-200'>u</span><span className='text-yellow-200'>s</span>
                  </h3>
                  <small className='max-sm:hidden text-[10px] font-semibold -mt-5 -ms-4  text-indigo-300'>Success through Smart Strategies.</small>
                </div>
              </div>)} 
          </div>
        </div>


        <div className="navbar-end ">
        {dashboardVisible ? <>
        <img src={logo} className='w-32 -mt-7 sm:hidden' alt="" />
                 <div className='max-sm:hidden'>{navEndContent} </div>

        </>
        : navEndContent
      }
       
        </div>
      </div>
    </>
  );
};

export default Navbar;
