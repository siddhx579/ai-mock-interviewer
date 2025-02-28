"use client";
import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';

export default function SignInPage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl backdrop-blur-lg p-5 rounded-2xl text-white flex flex-col items-center"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SignIn />
                </motion.div>
            </motion.div>
        </div>
    );
}