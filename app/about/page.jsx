"use client";
import { motion } from "framer-motion";
import Header from "../dashboard/_components/Header";

export default function About() {
    return (
        <div>
            <Header />
            <motion.div
                className="p-10 min-h-screen text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className="text-4xl font-bold text-center text-blue-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    About MockMate
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg text-gray-300 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    MockMate is an AI-powered mock interview platform that helps candidates prepare for job interviews by simulating real-world interview scenarios. It provides AI-generated questions, live feedback, and performance evaluation, helping users refine their responses and boost their confidence.
                </motion.p>

                <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    {/* Feature 1 */}
                    <motion.div
                        className="p-6 rounded-lg bg-gray-700 shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-xl font-semibold text-blue-300">🎯 AI-Driven Questions</h2>
                        <p className="mt-3 text-gray-300">
                            Get dynamically generated questions tailored to your job role and experience level.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="p-6 rounded-lg bg-gray-700 shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-xl font-semibold text-blue-300">📊 Instant Feedback</h2>
                        <p className="mt-3 text-gray-300">
                            Receive real-time feedback on your answers and ratings to improve your interview performance.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="p-6 rounded-lg bg-gray-700 shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-xl font-semibold text-blue-300">🔍 Performance Analysis</h2>
                        <p className="mt-3 text-gray-300">
                            Review your overall rating, strengths, and improvement areas with detailed feedback.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-blue-400">🚀 Get Started Today!</h2>
                    <p className="mt-3 text-gray-300">
                        Join MockMate and take your interview preparation to the next level.
                    </p>
                    <motion.a
                        href="/dashboard"
                        className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-black bg-blue-400 rounded-full shadow-md hover:bg-blue-500 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Start Your Mock Interview
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
}