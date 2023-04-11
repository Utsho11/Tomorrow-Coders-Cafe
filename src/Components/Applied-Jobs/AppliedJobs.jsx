import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { getStoredData } from '../../../public/utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import ApplyJobList from '../ApplyJobList/ApplyJobList';

const AppliedJobs = () => {

    const {ApplyJob} = useLoaderData();

    return (
        <div className='AppliedJob'>
            <h1>Applied Job</h1>
           {
            ApplyJob.map(jobList => <ApplyJobList
            key={jobList.id}
            jobList={jobList}></ApplyJobList>)
           }
        </div>
    );
};

export default AppliedJobs;