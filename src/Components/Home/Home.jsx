import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList'


const Home = () => {
    const jobLists = useLoaderData();

    return (
        <div>
            <section className='home-section-1'>
                <div>
                    <h1>One Step <br /> Closer To Your <br /> <span className='text-color'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div>
                <img src="/src/Components/Home/P3OLGJ1 copy 1.png"/>
                </div>
            </section>
            <section className='home-section-2'>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='joblists'>
                    {
                        jobLists.map(jobList => <JobList
                        key={jobList.id}
                        jobList={jobList}></JobList>  )
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;