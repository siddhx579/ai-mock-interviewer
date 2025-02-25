"use client";
import { MockMate } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { Lightbulb, WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function Interview() {
    const params = useParams();
    const [interviewData, setInterviewData] = useState();
    const [webCamEnabled, setWebCamEnabled] = useState(false);

    useEffect(() => {
        if (params?.interviewId) {
            GetInterviewDetails();
        }
    }, [params?.interviewId]);

    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockMate).where(eq(MockMate.mockId, params.interviewId));
        setInterviewData(result[0]);
    };

    return (
        <div className='my-10'>
            <h2 className='font-bold text-2xl'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex flex-col my-5 gap-5'>
                    <div className='flex flex-col p-5 rounded-lg border gap-5'>
                        <h2>
                            <strong>Job Role/Job Position:</strong> {interviewData?.jobPosition}{" "}
                        </h2>
                        <h2>
                            <strong>Job Description/Job Description:</strong>{" "}
                            {interviewData?.jobDesc}{" "}
                        </h2>
                        <h2>
                            <strong>Years of Experience:</strong> {interviewData?.jobExperience}{" "}
                        </h2>
                    </div>
                    <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb /></h2>
                        <h2 className='mt-3 text-justify'>
                            Enable video webcam and microphone to start your AI Generated Mock Interview.
                            It has 5 questions which you can answer and at the last you will get a report on
                            the basis of your answers. NOTE: We never record your video, webcam access can be
                            disabled anytime you want.
                        </h2>
                    </div>
                </div>
                <div>
                    {webCamEnabled ? (
                        <Webcam
                            onUserMedia={() => setWebCamEnabled(true)}
                            onUserMediaError={() => setWebCamEnabled(false)}
                            style={{ height: 350, width: 400 }}
                            mirrored={true}
                        />
                    ) : (
                        <>
                            <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
                            <Button variant="ghost" className='w-full' onClick={() => setWebCamEnabled(true)}>
                                Enable Web Cam and Microphone
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <div className='flex justify-end items-end'>
                <Link href={`/dashboard/interview/${params?.interviewId}/start`}>
                    <Button>Start Interview</Button>
                </Link>
            </div>
        </div>
    );
}

export default Interview;