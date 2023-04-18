import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import img from './image/person.png'


const Home = () => {
    const [jobLists, setJobLists] = useState([]);
    const [visible,setVisible] = useState(4)
    const featuredJobs = useLoaderData(4);

    useEffect(() => {
        fetch('/job-category-list.json')
            .then(res => res.json())
            .then(data => setJobLists(data))
    })

    const handleViewMore = () =>{
        setVisible(preValue =>  preValue + 4)
    }

    const handleViewLess = () =>{
        setVisible(preValue => preValue-4)
    }

    return (
        <div className='home'>
            <section className='home-section-1'>
                <div>
                    <h1>One Step <br /> Closer To Your <br /> <span className='text-color'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src={img} />
                </div>
            </section>
            <section className='home-section-2'>
                <div>
                    <h2>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='joblists'>
                        {
                            jobLists.map(jobList => <JobList
                                key={jobList.id}
                                jobList={jobList}></JobList>)
                        }
                    </div>
                </div>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </section>
            <section>
               
                    <div  className='home-section-3'>
                        {
                            featuredJobs.slice(0,visible).map(featuredJob => <FeaturedJobs
                                key={featuredJob.id}
                                featuredJob={featuredJob}></FeaturedJobs>)
                        }

                        
                    </div>
                    <div className='btn-viewMore'>
                    {
                        visible == 12 ? '':
                        <button className='btn-view' onClick={handleViewMore}>view more</button>
                    }
                    </div>

            </section>
        </div>
    );
};

export default Home;