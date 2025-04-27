export interface Job {
  id: number
  title: string
  company: string
  location: string
  description: string
  requirements: string[]
}

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    description:
      "We are seeking a talented Frontend Developer to join our team and help build engaging user experiences.",
    requirements: [
      "As a Frontend Developer, you will be responsible for building scalable, maintainable, and performant user interfaces.",
      "Collaborate with designers, product managers, and backend engineers to create seamless experiences.",
      "Develop and maintain a component-based frontend architecture.",
      "Ensure applications are optimized for maximum speed and scalability.",
      "Stay up-to-date with modern UI frameworks and trends.",
      "About you:",
      "• 3+ years of experience in React, Angular, or Vue.js.",
      "• Strong TypeScript and JavaScript fundamentals.",
      "• Experience with responsive design and cross-browser compatibility.",
      "• Familiarity with state management tools like Redux or MobX.",
      "• Understanding of performance optimization techniques.",
      "• Strong problem-solving skills and attention to detail.",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSystems Inc.",
    location: "San Francisco, CA",
    description:
      "Join our backend team to build scalable and efficient systems handling high traffic workloads.",
    requirements: [
      "As a Backend Engineer, you will design, develop, and maintain high-performance backend services.",
      "Work closely with frontend engineers to integrate APIs and improve system efficiency.",
      "Optimize database performance and scalability.",
      "Ensure system security and data protection best practices are in place.",
      "About you:",
      "• 5+ years of experience in backend development using Python, Java, or Node.js.",
      "• Strong understanding of SQL and NoSQL databases such as PostgreSQL, MongoDB, or Cassandra.",
      "• Experience with cloud platforms like AWS, GCP, or Azure.",
      "• Proficiency in RESTful API and GraphQL development.",
      "• Familiarity with microservices architecture and containerization using Docker/Kubernetes.",
      "• Strong analytical and debugging skills.",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Remote",
    description:
      "We're looking for a versatile Full Stack Developer to work on exciting projects from conception to deployment.",
    requirements: [
      "As a Full Stack Developer, you will work on both frontend and backend components of our applications.",
      "Ensure smooth integration of frontend UI with backend services.",
      "Optimize application performance and scalability.",
      "Write well-structured, reusable, and maintainable code.",
      "About you:",
      "• 4+ years of experience in full stack development.",
      "• Proficiency in React.js or Angular for frontend and Node.js or Django for backend.",
      "• Knowledge of database design and management (SQL/NoSQL).",
      "• Familiarity with DevOps practices, CI/CD pipelines, and cloud services.",
      "• Strong debugging and troubleshooting skills.",
      "• Excellent communication and teamwork skills.",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "CreativeAgency",
    location: "Los Angeles, CA",
    description:
      "Seeking a creative UI/UX Designer to craft intuitive user experiences and high-quality interfaces.",
    requirements: [
      "As a UI/UX Designer, you will be responsible for creating visually appealing and user-friendly interfaces.",
      "Conduct user research and usability testing to refine designs.",
      "Work closely with product managers and engineers to bring designs to life.",
      "Ensure designs align with brand guidelines and accessibility standards.",
      "About you:",
      "• 3+ years of experience in UI/UX design.",
      "• Proficiency in design tools like Figma, Sketch, or Adobe XD.",
      "• Strong portfolio showcasing design expertise.",
      "• Understanding of user-centered design principles.",
      "• Experience with HTML, CSS, and JavaScript is a plus.",
      "• Ability to communicate design concepts effectively.",
    ],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudNet Solutions",
    location: "Seattle, WA",
    description:
      "We need a skilled DevOps Engineer to optimize our infrastructure and deployment processes.",
    requirements: [
      "As a DevOps Engineer, you will manage infrastructure automation and deployment processes.",
      "Ensure high availability and reliability of production systems.",
      "Develop and maintain CI/CD pipelines to streamline deployment.",
      "Monitor system performance and proactively resolve issues.",
      "About you:",
      "• 3+ years of experience in DevOps or SRE roles.",
      "• Strong expertise in cloud platforms (AWS, GCP, or Azure).",
      "• Proficiency in Docker, Kubernetes, Terraform, and Ansible.",
      "• Experience with CI/CD tools like Jenkins, GitHub Actions, or GitLab CI.",
      "• Familiarity with monitoring tools such as Prometheus, Grafana, or Datadog.",
      "• Excellent problem-solving and scripting skills (Bash, Python, or Go).",
    ],
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AI Insights",
    location: "Austin, TX",
    description:
      "Looking for a Data Scientist to drive insights and develop machine learning models for predictive analytics.",
    requirements: [
      "As a Data Scientist, you will develop machine learning models and analyze large datasets.",
      "Work with cross-functional teams to extract actionable insights.",
      "Implement data pipelines and ensure data integrity.",
      "Stay up to date with emerging trends in AI and data science.",
      "About you:",
      "• 4+ years of experience in data science or machine learning.",
      "• Proficiency in Python, R, and SQL.",
      "• Experience with TensorFlow, PyTorch, or Scikit-Learn.",
      "• Strong statistical and data visualization skills.",
      "• Familiarity with big data tools like Spark, Hadoop, or Snowflake.",
      "• Excellent problem-solving and communication skills.",
    ],
  },
  {
    id: 7,
    title: "Cybersecurity Analyst",
    company: "SecureTech",
    location: "Washington, DC",
    description:
      "Seeking a cybersecurity expert to safeguard our systems and networks from cyber threats.",
    requirements: [
      "As a Cybersecurity Analyst, you will be responsible for monitoring, detecting, and responding to security threats.",
      "Conduct risk assessments and implement security policies.",
      "Perform penetration testing and vulnerability assessments.",
      "Collaborate with teams to ensure compliance with security standards.",
      "About you:",
      "• 3+ years of experience in cybersecurity or IT security.",
      "• Knowledge of security frameworks (NIST, ISO 27001, CIS).",
      "• Experience with SIEM tools, IDS/IPS, and firewalls.",
      "• Familiarity with ethical hacking and penetration testing.",
      "• Certifications like CISSP, CEH, or Security+ are a plus.",
      "• Strong problem-solving and analytical skills.",
    ],
  },
  
]
