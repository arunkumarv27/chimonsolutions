"use client"

import { motion } from "framer-motion"
import type { Job } from "./mockJobs"
import { Button } from "@/components/ui/button"

interface JobListProps {
  jobs: Job[]
  onJobSelect: (job: Job) => void
  selectedJobId: number | undefined
}

export default function JobList({ jobs, onJobSelect, selectedJobId }: JobListProps) {
  return (
    <div className="space-y-4">
      <motion.h2
        className="text-3xl font-bold mb-4 text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Available Positions
      </motion.h2>
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Button
            variant="ghost"
            className={`w-full justify-start text-left p-4 rounded-lg h-19  ${selectedJobId === job.id ? "bg-blue-600/20" : "bg-gray-700/20"
              } hover:bg-blue-500/30 transition-colors`}
            onClick={() => onJobSelect(job)}
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{job.title}</h3>
              <p className="text-sm text-gray-300">{job.company}</p>
              <p className="text-sm text-gray-400">{job.location}</p>
            </div>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

