import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import ApplyJobList from '../ApplyJobList/ApplyJobList';
import vector1 from './img/Vector-1.png' 
import vector from './img/Vector.png'

const AppliedJobs = () => {

    const {ApplyJob} = useLoaderData();

    const [job,setJob] = useState(ApplyJob)

    const handleFilter = (type) =>{
        const updateJobs = ApplyJob.filter((curJob)=>{
            return curJob.job_type === type;
        });
        setJob(updateJobs);
    }

    console.log(ApplyJob);

    return (
        <div>
        <div className='AppliedJob'>
            <img className='bannerImage1' src={vector1}/>
            <div className='bannerBody'>
                <h2>Applied Job</h2>
                <img className='bannerImage2' src={vector}/>
            </div>
            <div className='btn-filter'>
                <button onClick={()=>handleFilter('Remote')}>Remote</button>
                <button onClick={()=>handleFilter('Onsite')}>Onsite</button>
            </div>
           {
            job.map(jobList => <ApplyJobList
            key={jobList.id}
            jobList={jobList}></ApplyJobList>)
           }
        </div>
        </div>
    );
};

export default AppliedJobs;