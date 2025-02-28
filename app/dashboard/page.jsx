import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';

function Dashboard() {
    return (
        <div className='p-10'>
            <h2 className='font-bold text-white text-2xl'>Dashboard</h2>
            <h2 className='text-gray-400'>Create and Start your AI Mockup Interview</h2>
            <div className='grid grid-cols-1 mb-8 md:grid-cols-3 my-5'>
                <AddNewInterview />
            </div>
            <InterviewList />
        </div>
    );
}

export default Dashboard;