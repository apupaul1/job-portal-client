import React from 'react';
import Banner from '../../components/Banner/Banner';
import Register from '../Register/Register'
import LatestJobs from '../../components/LatestJobs/LatestJobs';

const Home = () => {
    return (
        <div>
            <div className='bg-slate-100 pb-43 pt-20'>
                <Banner></Banner>
            </div>
            <LatestJobs></LatestJobs>
        </div>
    );
};

export default Home;