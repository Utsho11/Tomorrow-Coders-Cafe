import React, { useEffect, useState } from 'react';
import './FeaturedJobDetail.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../../public/utilities/fakedb';
import vector1 from './img/Vector-1.png'
import vector from './img/Vector.png'
import frame from './icon/Frame.png'
import frame1 from './icon/Frame-1.png'
import frame2 from './icon/Frame-2.png'
import frame3 from './icon/Frame-3.png'
import frame4 from './icon/Frame-4.png'

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

    const handleAddToApplyJob = (id) =>{
        addToDb(id)
    }
    return (
        <div className='FeaturedJob'>
            <img className='bannerImage1' src={vector1} />
            <div className='bannerBody'>
                <h2>Job Details</h2>
                <img className='bannerImage2' src={vector}/>
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
                        <img src={frame}/>
                        <p><b>Salary:</b> {data.salary}</p>
                        </div>
                        <div className='imgInfo'>
                        <img src={frame1}/>
                        <p><b>Job Title:</b> {data.job_title}</p> 
                        </div>
                        <h4>Contact Information</h4>
                        <hr />
                        <div className='imgInfo'>
                        <img src={frame2}/>
                        <p><b>Phone :</b> {data.phone}</p>
                        </div>
                        <div className='imgInfo'>
                        <img src={frame3}/>
                        <p><b>Email :</b> {data.email}</p>
                        </div>
                        <div className='imgInfo'>
                        <img src={frame4}/>
                        <p><b>Address :</b> {data.address}</p>
                        </div>
                    </div>
                    <button onClick={() => handleAddToApplyJob(data.id)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobDetail;