"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "../dashboard/_components/Header";

function UpgradePage() {
    return (
        <div>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center p-10 text-white">
            {/* Header Section */}
            <motion.h1 
                className="text-4xl font-bold mb-5 text-center text-green-500"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Unlock Premium Features 🚀
            </motion.h1>
            <motion.p 
                className="text-lg text-gray-300 mb-10 text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Upgrade to MockMate Pro and take your interview preparation to the next level! Get access to advanced AI feedback, mock interviews, detailed analytics, and unlimited questions.
            </motion.p>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Free Plan */}
                <motion.div 
                    className="p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800 text-center"
                    initial={{ opacity: 0, y: -10}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, delay: 0.2}}
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-2xl font-semibold text-green-400">Free Plan</h2>
                    <p className="text-gray-400 mt-2">Basic access to mock interviews with limited questions.</p>
                    <h3 className="text-3xl font-bold mt-5 text-white">₹ 0/month</h3>
                    <Button className="mt-4 w-full bg-gray-700 hover:bg-gray-600">Get Started</Button>
                </motion.div>

                {/* Pro Plan */}
                <motion.div 
                    className="p-6 border border-blue-500 rounded-lg shadow-lg bg-gray-800 text-center"
                    initial={{ opacity: 0, y: -10}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, delay: 0.2}}
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-2xl font-semibold text-blue-400">Pro Plan</h2>
                    <p className="text-gray-400 mt-2">Unlimited access to AI mock interviews, real-time feedback, and analytics.</p>
                    <h3 className="text-3xl font-bold mt-5 text-white">₹ 299/month</h3>
                    <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-500">Upgrade Now</Button>
                </motion.div>
            </div>
        </div>
        </div>
    );
}

export default UpgradePage;