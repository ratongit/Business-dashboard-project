import React from 'react';
import logo from './../../assets/businesslogo.png'
const DashboardMainSideber = () => {
    return (
        <div>
            <hr className='border-[1px] border-gray-700 w-72 -ms-12 absolute mt-14' />

            <ul className='borderline absolute  flex flex-col gap-5 '>

                <div className='flex justify-start gap-1'>

                    <img src={logo} className=' w-44 -m-11 ' alt="" />
                    <h3 className='text-3xl font-semibold text-indigo-200'>
                         <span className='text-indigo-400 text-4xl'>O</span>
                         <span >c</span>
                         <span>t</span>
                         <span>o</span>
                         <span className='text-yellow-400'>P</span>
                         <span className='text-yellow-200'>u</span>
                         <span className='text-yellow-200'>s</span>
                         
                         </h3>
                </div>

                <li>xmnlc</li>
                <li>xmnlc</li>
                <li>xmnlc</li>
            </ul>

        </div>
    );
};

export default DashboardMainSideber;