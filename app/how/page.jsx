"use client";
import { motion } from "framer-motion";
import Header from "../dashboard/_components/Header";

function HowItWorks() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-6 py-20 text-white">
                <motion.h1
                    className="text-4xl font-bold mb-6 text-blue-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    How MockMate Works
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 text-center max-w-2xl mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    MockMate is an AI-powered mock interview platform that helps you simulate real-world job interviews,
                    providing AI-generated questions, live feedback, and performance evaluations to improve your interview skills.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Step 1: Select Your Role",
                            desc: "Choose your desired job role and experience level to generate custom AI-powered interview questions."
                        },
                        {
                            title: "Step 2: Start the Interview",
                            desc: "Enable your webcam and microphone to answer AI-generated questions in a real-time interview simulation."
                        },
                        {
                            title: "Step 3: Get Instant Feedback",
                            desc: "Receive AI-driven insights, ratings, and suggestions to improve your responses and boost your confidence."
                        }
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <h2 className="text-xl font-semibold text-blue-400">{step.title}</h2>
                            <p className="text-gray-300 mt-2">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;