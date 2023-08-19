import React from 'react';
import "./DashboardContent.css"
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import CardBarChart from './Charts/BarChart/BarChart';
const DashBoardMainContent = () => {
  return (
    <div>
      <div className='dashboard-content'>

        <div className=' grid md:grid-cols-2'>

          <div className='homePageCard '>
            <div className='flex justify-between'>
              <div className='flex gap-4 align'>
                <div className='w-12 h-12 theme2 rounded-md'>
                  kjw</div>
                <h3 className='text-white'> Total Revenue</h3>
              </div>
              <div className='w-20 h-7 align rounded-2xl text-center theme2  text-green-400  flex justify-center gap-2'><FiTrendingUp></FiTrendingUp> 20%</div>
            </div>
            <div className='text-white mt-2 text-3xl'>$26,32,324</div>
            <p className='text-sm'>in lest week</p>
          </div>

          <div className='homePageCard '>
            <div className='flex justify-between'>
              <div className='flex gap-4 align'>
                <div className='w-12 h-12 theme2 rounded-md'>
                  kjw</div>
                <h3 className='text-white'> Total Sales</h3>
              </div>
              <div className='w-20 h-7 align rounded-2xl text-center text-green-400 theme2 flex justify-center gap-2'><FiTrendingUp></FiTrendingUp> 15%</div>
            </div>
            <div className='text-white mt-2 text-3xl'>$86,32,654</div>
            <p className='text-sm'>in lest week</p>
          </div>

          <div className='homePageCard '>
            <div className='flex justify-between'>
              <div className='flex gap-4 align'>
                <div className='w-12 h-12 theme2 rounded-md'>
                  kjw</div>
                <h3 className='text-white'> Total Product</h3>
              </div>
              <div className='w-20 h-7 align rounded-2xl text-center theme2 text-yellow-300 flex justify-center gap-2'><FiTrendingDown></FiTrendingDown> 1.2%</div>
            </div>
            <div className='text-white mt-2 text-3xl'>$1,43,24,345</div>
            <p className='text-sm'>in lest week</p>
          </div>

          <div className='homePageCard '>
            <div className='flex justify-between'>
              <div className='flex gap-4 align'>
                <div className='w-12 h-12 theme2 rounded-md'>
                  kjw</div>
                <h3 className='text-white'> Total Expencses</h3>
              </div>
              <div className='w-20 h-7 align rounded-2xl text-center theme2 text-red-400 flex justify-center gap-2'><FiTrendingDown></FiTrendingDown> 2.2%</div>
            </div>
            <div className='text-white mt-2 text-3xl'>$60,62,244</div>
            <p className='text-sm'>in lest week</p>
          </div>



        </div>

<CardBarChart></CardBarChart>

      </div>
    </div>
  );
};

export default DashBoardMainContent;