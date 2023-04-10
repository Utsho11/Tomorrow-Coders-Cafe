import React from 'react';
import './JobList.css'

const jobList = ({jobList}) => {
    const {id,image,job_type,job_availability} = jobList;
    return (
        <div className='joblist'>
            <div className='joblist-img'>
            <img src={image} alt="" />
            </div>
            <h4>{job_type}</h4>
            <p>{job_availability} jobs available</p>
        </div>
    );
};

export default jobList;