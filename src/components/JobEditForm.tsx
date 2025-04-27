"use client"

import { useState } from "react"
import { Job } from "./mockJobs"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

interface JobEditFormProps {
  job: Job
  onSubmit: (job: Job) => void
  onCancel: () => void
}

export default function JobEditForm({ job, onSubmit, onCancel }: JobEditFormProps) {
  const [title, setTitle] = useState(job.title)
  const [company, setCompany] = useState(job.company)
  const [location, setLocation] = useState(job.location)
  const [description, setDescription] = useState(job.description)
  const [requirements, setRequirements] = useState(job.requirements.join("\n"))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...job,
      title,
      company,
      location,
      description,
      requirements: requirements.split("\n").filter(r => r.trim() !== "")
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <div>
        <Label className="text-white mb-1 block">Title</Label>
        <Input className="bg-gray-800 text-white" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <Label className="text-white mb-1 block">Company</Label>
        <Input className="bg-gray-800 text-white" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div>
        <Label className="text-white mb-1 block">Location</Label>
        <Input className="bg-gray-800 text-white" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <Label className="text-white mb-1 block">Description</Label>
        <Textarea
          className="bg-gray-800 text-white"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <Label className="text-white mb-1 block">Requirements (one per line)</Label>
        <Textarea
          className="bg-gray-800 text-white"
          rows={4}
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
        />
      </div>
      <div className="flex justify-between gap-4">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded-lg"
        >
          Save
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 hover:bg-gray-700 w-full text-white py-2 rounded-lg"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
