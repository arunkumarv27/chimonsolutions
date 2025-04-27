"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Job } from "./mockJobs"
import ApplicationForm from "./ApplicationForm"
import Image from "next/image"

interface JobDetailProps {
  job: Job
  onApply: () => void
}

export default function JobDetail({ job }: JobDetailProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <motion.div className="p-6 space-y-6 text-white relative">

      {/* Easy Apply Button */}
      <div className="absolute top-0 right-0 p-4">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition space-x-2"
        >
          <Image
            src="/Chimon SolutionsHorizontalpng.png"
            alt="Chimon Solutions Logo"
            width={24}
            height={24}
          />
          <span>Easy Apply</span>
        </button>
      </div>

      {/* Job Title */}
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {job.title}
      </motion.h1>

      {/* Job Info */}
      <div className="space-y-2">
        <p><strong>Location:</strong> {job.location}</p>
        {job.company && <p><strong>Interview:</strong> {job.company}</p>}
      </div>

      {/* Job Description */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
        <p>{job.description}</p>
      </motion.div>

      {/* Duties List */}
      {job.requirements?.length > 0 && (
        <motion.div
          className="my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Duties and Responsibilities</h2>
          <ul className="list-disc ml-5">
            {job.requirements.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Original Embedded Form (Optional) */}
      {/* <ApplicationForm job={job} onSubmit={onApply} /> */}

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg w-full max-w-xl relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white text-xl hover:text-red-400"
            >
              &times;
            </button>
            <ApplicationForm job={job} onSubmit={() => setShowModal(false)} />
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
