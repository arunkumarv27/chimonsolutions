"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Confetti from "react-confetti"
import { type Job, mockJobs } from "./mockJobs"
import JobList from "./JobList"
import JobDetails from "./JobDetails"
import ApplicationForm from "./ApplicationForm"
import BackgroundShapes from "./BackgroundShapes"

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job)
    setShowApplicationForm(false)
  }

  const handleApply = () => {
    setShowApplicationForm(true)
  }

  const handleApplicationSubmit = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <div className="relative flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <BackgroundShapes />
      <motion.div
        className="w-1/3 p-4 overflow-y-auto border-r border-gray-700 bg-gray-800/50 backdrop-blur-md"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <JobList jobs={mockJobs} onJobSelect={handleJobSelect} selectedJobId={selectedJob?.id} />
      </motion.div>
      <motion.div
        className="w-2/3 p-4 overflow-y-auto bg-gray-800/50 backdrop-blur-md"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {selectedJob && !showApplicationForm && <JobDetails job={selectedJob} onApply={handleApply} />}
        {showApplicationForm && <ApplicationForm job={selectedJob!} onSubmit={handleApplicationSubmit} />}
      </motion.div>
      {showConfetti && <Confetti />}
    </div>
  )
}

