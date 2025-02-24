"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockMate } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [JsonResponse, setJsonResponse] = useState([]);
    const { user } = useUser();

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(jobPosition, jobDesc, jobExperience);

        const InputPrompt = "Job Position: " + jobPosition + ", Job Description: " + jobDesc + ", Years of Experience: " + jobExperience + ", Depends on this information please give me " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions with answered in JSON Format, Give questions and answered as fields in JSON";

        const result = await chatSession.sendMessage(InputPrompt);
        const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');

        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);
        if (MockJsonResp) {
            const resp = await db.insert(MockMate).values({
                mockId: uuidv4(),
                jsonMockResp: MockJsonResp,
                jobPosition: jobPosition,
                jobDesc: jobDesc,
                jobExperience: jobExperience,
                createBy: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format("DD-MM-yyyy"),
            }).returning({ mockId: MockMate.mockId })
            console.log("Insert ID:", resp);
        } else {
            console.log("Error");

        }
        setLoading(false);
    }

    return (
        <div>
            <div
                className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
                onClick={() => setOpenDialog(true)}
            >
                <h2 className="text-lg text-center">+ Add New</h2>
            </div>
            <Dialog open={openDialog}>
                <DialogContent className="max-w-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">
                            Tell us more about your job interviewing
                        </DialogTitle>
                        <p className="text-sm text-gray-500">
                            Add details about your job position, description, and years of experience.
                        </p>
                    </DialogHeader>
                    <form onSubmit={onSubmit} className="mt-4">
                        <div className="my-3">
                            <label className="block text-sm font-medium">Job Role/Job Position</label>
                            <Input
                                placeholder="Ex. Full Stack Developer"
                                required
                                onChange={(event) => setJobPosition(event.target.value)}
                            />
                        </div>
                        <div className="my-3">
                            <label className="block text-sm font-medium">Job Description/ Tech Stack (In Short)</label>
                            <Textarea
                                placeholder="Ex. React, Node.js, MySQL, JavaScript, etc."
                                required
                                onChange={(event) => setJobDesc(event.target.value)}
                            />
                        </div>
                        <div className="my-3">
                            <label className="block text-sm font-medium">Years of Experience</label>
                            <Input
                                placeholder="0"
                                type="number"
                                max="50"
                                required
                                onChange={(event) => setJobExperience(event.target.value)}
                            />
                        </div>
                        <div className="flex gap-5 justify-end">
                            <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? (
                                    <>
                                        <LoaderCircle className="animate-spin" />Generating from AI
                                    </>
                                ) : (
                                    "Start Interview"
                                )}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview;