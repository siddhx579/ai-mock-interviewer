"use client";
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

function Feedback({ params: paramsPromise }) {
    const [params, setParams] = useState(null);
    const [feedbackList, setFeedbackList] = useState([]);
    const [avgRating, setAvgRating] = useState();
    const router = useRouter();

    useEffect(() => {
        async function resolveParams() {
            const resolvedParams = await paramsPromise;
            setParams(resolvedParams);
        }
        resolveParams();
    }, [paramsPromise]);

    useEffect(() => {
        if (params) {
            GetFeedback(params.interviewId);
        }
    }, [params]);

    const GetFeedback = async (interviewId) => {
        const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, interviewId)).orderBy(UserAnswer.id);

        setFeedbackList(result);
        let getTotalOfRating = result.reduce((sum, item) => sum + Number(item.rating), 0);
        setAvgRating(Math.round(getTotalOfRating / result?.length));
    };

    if (!params) return <p>Loading...</p>;

    return (
        <ScrollArea className="h-[80vh] p-10">
            {feedbackList?.length === 0 ? (
                <h2 className='font-bold text-xl text-white'>No Interview Feedback Record Found</h2>
            ) : (
                <>
                    <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
                    <h2 className='font-bold text-white text-2xl'>Here is your interview feedback</h2>
                    <h2 className='text-slate-400 text-lg my-3'>
                        Your overall interview rating - <strong className={avgRating < 6 ? 'text-red-600' : 'text-green-500'}>{avgRating}/10</strong>
                    </h2>
                    <h2 className='text-sm text-gray-200'>
                        Find below interview questions with correct answers, your answers, and feedback for improvement.
                    </h2>
                    {feedbackList.map((item, index) => (
                        <Collapsible key={index} className='mt-7'>
                            <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex items-center justify-between gap-7 w-full'>
                                {item.question} <ChevronsUpDownIcon className='h-5 w-5' />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-red-600 p-2 rounded-lg'><strong>Rating:</strong> {item.rating}</h2>
                                    <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your answer:</strong> {item.userAns}</h2>
                                    <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900 mt-2'><strong>Correct answer:</strong> {item.correctAns}</h2>
                                    <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary mt-2'><strong>Feedback:</strong> {item.feedback}</h2>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </>
            )}
            <Button className='mt-4 bg-slate-500' onClick={() => router.replace('/dashboard')}>Go Home</Button>
        </ScrollArea>
    );
}

export default Feedback;