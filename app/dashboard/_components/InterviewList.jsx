"use client";
import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import InterviewItemCard from './InterviewItemCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function InterviewList() {
    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);

    useEffect(() => {
        if (user) GetInterviewList();
    }, [user]);

    const GetInterviewList = async () => {
        const result = await db.select()
            .from(MockMate)
            .where(eq(MockMate.createBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(MockMate.id));
        setInterviewList(result);
    };

    return (
        <div className="w-full">
            <h2 className='font-bold text-xl mb-4 text-white'>Previous Mock Interviews</h2>
            {interviewList.length > 0 ? (
                <Carousel className="w-full">
                    <CarouselContent className="flex">
                        {interviewList.map((interview, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 sm:basis-1/2 basis-full px-4">
                                <InterviewItemCard interviewInfo={interview} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            ) : (
                <p className="text-gray-400 mt-2">No mock interviews found.</p>
            )}
        </div>
    );
}

export default InterviewList;