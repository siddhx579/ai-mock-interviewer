"use client";
import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {
    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);
    useEffect(() => {
        user && GetInterviewList()
    }, [user]);
    const GetInterviewList = async () => {
        const result = await db.select().from(MockMate).where(eq(MockMate.createBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(MockMate.id));
        setInterviewList(result);
    }

    return (
        <div>
            <h2 className='font-bold text-xl'>Previous Mock Interviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                {interviewList && interviewList.map((interview, index) => (
                    <InterviewItemCard key={index} interviewInfo={interview} />
                ))}
            </div>
        </div>
    );
}

export default InterviewList;