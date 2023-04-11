import React from 'react';
import './Statistics.css'
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Assignment-1", value: 57 },
  { name: "Assignment-2", value: 50 },
  { name: "Assignment-3", value: 55 },
  { name: "Assignment-4", value: 60 },
  { name: "Assignment-5", value: 57 },
  { name: "Assignment-6", value: 53 },
  { name: "Assignment-7", value: 57 }
];

const Statistics = () => {
    
    return (
        <div className='statistic'>
            <img className='bannerImage1' src="../../../src/Components/FeaturedJobDetail/img/Vector-1.png" alt="" />
            <div className='bannerBody'>
                <h2>STATISTIC</h2>
                <img className='bannerImage2' src="../../../src/Components/FeaturedJobDetail/img/Vector.png" alt="" />
            </div>
            <div className='pieChart'>
            <PieChart width={1000} height={900}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={530}
        cy={180}
        outerRadius={150}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
            </div>
        </div>
    );
};

export default Statistics;
