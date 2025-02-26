"use client";
import React, { useEffect, useState, use } from "react";
import { useParams } from "next/navigation";
import { MockMate } from "@/utils/schema";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";


function StartInterview() {
    const params = useParams(); // Correct way to get params in client components
    const interviewId = params?.interviewId; // Ensure params are defined

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    useEffect(() => {
        if (interviewId) {
            GetInterviewDetails(interviewId);
        }
    }, [interviewId]);

    const GetInterviewDetails = async (interviewId) => {
        const result = await db
            .select()
            .from(MockMate)
            .where(eq(MockMate.mockId, interviewId));

        setInterviewData(result[0]);

        if (result[0]?.jsonMockResp) {
            const jsonMockResp = JSON.parse(result[0].jsonMockResp);
            setMockInterviewQuestion(jsonMockResp);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <QuestionsSection
                    mockInterviewQuestion={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                />
                <RecordAnswerSection
                    activeQuestionIndex={activeQuestionIndex}
                    mockInterviewQuestion={mockInterviewQuestion}
                    interviewData={interviewData}
                />
            </div>
            <div className="flex justify-end gap-6">
                {activeQuestionIndex > 0 && <Button disabled={activeQuestionIndex == 0} onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>}

                {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>}

                {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
                    <Link href={'/dashboard/interview/' + interviewData?.mockId + "/feedback"}>

                        <Button>End Interview</Button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default StartInterview;