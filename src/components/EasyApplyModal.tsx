// components/EasyApplyModal.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import ApplicationForm from "./ApplicationForm"
import { Job } from "./mockJobs"

interface EasyApplyModalProps {
    job: Job
}

export default function EasyApplyModal({ job }: EasyApplyModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
                <Image
                    src="/Chimon SolutionsHorizontalpng.png"
                    alt="Chimon Solutions Logo"
                    width={24}
                    height={24}
                />
                <span>Easy Apply</span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <motion.div
                        className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-white text-xl font-bold">Apply for {job.title}</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-red-400 text-xl"
                            >
                                &times;
                            </button>
                        </div>
                        <ApplicationForm job={job} onSubmit={() => setIsOpen(false)} />
                    </motion.div>
                </div>
            )}
        </div>
    )
}
