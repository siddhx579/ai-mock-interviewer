"use client";
import { MockMate } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react';

function Interview({params}) {
    useEffect(() => {
        console.log(params)
        GetInterviewDetail();
    }, [])

    const GetInterviewDetail = async () => {
        const result = await db.select().from(MockMate).where(eq(MockMate.mockId, params.interviewId));
    console.log(result);
    }

    return (
        <div>Interview</div>
    )
}

export default Interview;