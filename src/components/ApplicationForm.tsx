
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Job } from "./mockJobs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ApplicationFormProps {
  job: Job
  onSubmit: () => void
}

export default function ApplicationForm({ job, onSubmit }: ApplicationFormProps) {
  const [email, setEmail] = useState("")
  const [resume, setResume] = useState<File | null>(null)
  const [coverLetter, setCoverLetter] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!email || !resume) {
      alert("Please fill all required fields.")
      return
    }
  
    const formData = new FormData()
    formData.append("email", email)
    formData.append("coverLetter", coverLetter)
    formData.append("jobTitle", job.title)
    formData.append("resume", resume)
  
    try {
      const res = await fetch("/applyJob", {
        method: "POST",
        body: formData,
      })
  
      if (res.ok) {
        alert("Application sent successfully!")
        onSubmit()
      } else {
        alert("Failed to send application.")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("An error occurred while sending your application.")
    }
  }
  

  return (
    <motion.div
      className="bg-gray-800/50 p-6 rounded-lg shadow backdrop-blur-md text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Apply for {job.title}
      </motion.h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-700/50 text-white placeholder-gray-400"
          />
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Label htmlFor="resume" className="text-white">
            Upload Resume
          </Label>
          <Input
            id="resume"
            type="file"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            required
            className="bg-gray-700/50 text-white"
          />
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Label htmlFor="coverLetter" className="text-white">
            Cover Letter (Optional)
          </Label>
          <Textarea
  id="coverLetter"
  rows={4}
  value={coverLetter}
  onChange={(e) => setCoverLetter(e.target.value)}
  className="bg-gray-700/50 text-white placeholder-gray-400"
/>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button type="submit" className="bg-orange-500 text-white hover:bg-orange-600">
            Send Application
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
