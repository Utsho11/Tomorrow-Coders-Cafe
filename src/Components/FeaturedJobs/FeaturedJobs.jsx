import React from 'react';
import './FeaturedJobs.css'
import { Link, useLoaderData } from 'react-router-dom';
import icon1 from './icon/Frame-4.png'
import icon2 from './icon/Frame.png'

const FeaturedJobs = ({ featuredJob }) => {
    const { id, image, company_name, job_title, work_time, job_type, salary, address} = featuredJob;
    return (
        <div className='featuredJob-container'>
            <div className='featuredJob'>
                <img src={image} alt="" />
                <h4>{job_title}</h4>
                <p>{company_name}</p>
                <div className='job-info'>
                <p>{job_type}</p>
                <p>{work_time}</p>
                </div>
                <div className='address-salary-info'>
                <img src={icon1} />
                <p>{address}</p>
                <img src={icon2}/>
                <p>{salary}</p>
                </div>
                <button><Link to={`/featuredJobs/${id}`}>View Detail</Link></button>
            </div>
        </div>
    );
};

export default FeaturedJobs;