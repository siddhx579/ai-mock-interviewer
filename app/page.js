"use client";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <div className="flex items-center justify-between min-h-[calc(100vh-80px)] p-6 container ml-10 mx-auto md:flex-row flex-col gap-[140px] md:gap-0 md:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <h1 className="text-[44px] text-gray-200 font-bold">Prepare for your next Interview</h1>
            <p className="text-[16px] leading-[1.6] text-gray-300">Practice with mock interviews and receive detailed feedback to understand where you stand.</p>
            <Link href={"/dashboard"}>
              <Button className="mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform duration-100">Get Started</Button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="image"
          >
            <img className="w-[600px] h-[400px] object-contain drop-shadow-lg" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" alt="Main" />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 