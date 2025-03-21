import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

function InterviewItemCard({ interviewInfo }) {
    const router = useRouter();
    const onStart = () => {
        console.log("first");
        router.push(`/dashboard/interview/${interviewInfo?.mockId}`);
    };
    const onFeedback = () => {
        router.push(`/dashboard/interview/${interviewInfo.mockId}/feedback`);
    };

    return (
        <div className='border shadow-sm bg-[#212631] rounded-lg p-3'>
            <h2 className='font-bold text-white'>{interviewInfo?.jobPosition}</h2>
            <h2 className='text-sm text-slate-400'>Years: {interviewInfo?.jobExperience}</h2>
            <h2 className='text-xs text-slate-400'>Created at: {interviewInfo?.createdAt}</h2>
            <div className='flex justify-between mt-2 gap-5'>
                <Button size="sm" variant="outline" className="w-full" onClick={onFeedback}>Feedback</Button>
                <Button size="sm" className="w-full bg-slate-500" onClick={onStart}>Start</Button>
            </div>
        </div>
    );
}

export default InterviewItemCard;