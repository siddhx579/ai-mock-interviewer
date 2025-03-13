"use client";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6 container mx-auto gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center md:text-left flex-1"
        >
          <h1 className="text-3xl md:text-5xl text-gray-200 font-bold leading-tight">Prepare for your next Interview</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mt-4">Practice with mock interviews and receive detailed feedback to understand where you stand.</p>
          <Link href="/dashboard">
            <Button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform duration-100">
              Get Started
            </Button>
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <img 
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain drop-shadow-lg" 
            src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" 
            alt="Main" 
          />
        </motion.div>
      </div>
    </div>
  );
}