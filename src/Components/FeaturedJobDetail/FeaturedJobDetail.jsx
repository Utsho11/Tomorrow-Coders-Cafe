import React, { useEffect, useState } from 'react';
import './FeaturedJobDetail.css'
import { useLoaderData, useParams } from 'react-router-dom';

const FeaturedJobDetail = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        if (jobs) {
            const match = jobs.find(job => job.id == id);
            setData(match);
        }
    }, [])
    return (
        <div className='FeaturedJob'>
            <img className='bannerImage1' src="../../../src/Components/FeaturedJobDetail/img/Vector-1.png" alt="" />
            <div className='bannerBody'>
                <h2>Job Details</h2>
                <img className='bannerImage2' src="../../../src/Components/FeaturedJobDetail/img/Vector.png" alt="" />
            </div>
            <div className='FeaturedJobDetails'>
                <div>
                    <p><b>Job Description:</b> {data.job_description}</p>
                    <p><b>Job Responsibility:</b> {data.job_responsibility}</p>
                    <b>Educational Requirements:</b>
                    <p>{data.educational_requirements}</p>
                    <b>Experiences:</b>
                    <p>{data.experiences}</p>
                </div>
                <div>
                    <div className='jobDetails'>
                        <h4>Job Details</h4>
                        <hr />
                        <div className='imgInfo'>
                        <img src="../../../src/Components/FeaturedJobDetail/img/Frame.png"/>
                        <p><b>Salary:</b> {data.salary}</p>
                        </div>
                        <div className='imgInfo'>
                        <img src="../../../src/Components/FeaturedJobDetail/img/Frame-1.png"/>
                        <p><b>Job Title:</b> {data.job_title}</p> 
                        </div>
                        <h4>Contact Information</h4>
                        <hr />
                        <div className='imgInfo'>
                        <img src="../../../src/Components/FeaturedJobDetail/img/Frame-2.png" />
                        <p><b>Phone :</b> {data.phone}</p>
                        </div>
                        <div className='imgInfo'>
                        <img src="../../../src/Components/FeaturedJobDetail/img/Frame-3.png" />
                        <p><b>Email :</b> {data.email}</p>
                        </div>
                        <div className='imgInfo'>
                        <img src="../../../src/Components/FeaturedJobDetail/img/Frame-4.png" />
                        <p><b>Address :</b> {data.address}</p>
                        </div>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobDetail;