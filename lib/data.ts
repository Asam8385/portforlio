import React from "react";
import { FaCode, FaServer, FaCloud, FaUniversity } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiGo } from "react-icons/di";

// Project images - using placeholder for new projects
import hackerrank from "@/public/hackerrank.jpeg";
import haxtreme from "@/public/haxtreme.jpg";
import portfolio from "@/public/portfolio.png";
import littlelemon from "@/public/littlelemon.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Associate Software Engineer",
    company: "PickMe",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    description: [
      "Developed backend microservices using Golang and Kotlin for high-performance payment systems",
      "Built QR payment integration features with RESTful APIs handling real-time transactions",
      "Designed Traveling Salesman algorithm for optimized driver pooling and route allocation",
      "Implemented concurrent processing using Golang goroutines for efficient server communication",
      "Designed ETL pipelines using Python to process data from Appsflyer and store in S3",
    ],
    icon: React.createElement(DiGo),
    date: "May 2024 - Dec 2024",
    skills: ["Golang", "Kotlin", "React", "Python", "TiDB", "Docker", "Kubernetes", "Jenkins"],
    companyLogo: "https://cdn-icons-png.flaticon.com/512/3448/3448650.png",
  },
  {
    title: "Intern - Django Developer",
    company: "Octobus BI",
    location: "Colombo, Sri Lanka",
    type: "Internship",
    description: [
      "Utilized Git for code management and collaboration with team members",
      "Implemented user authentication and authorization features",
      "Collaborated with development team to design and implement RESTful APIs",
      "Gained experience on AWS Lambda for serverless deployment",
    ],
    icon: React.createElement(FaServer),
    date: "Feb 2024 - May 2024",
    skills: ["Django", "Python", "AWS Lambda", "REST APIs", "Git"],
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop",
  },
  {
    title: "BSc (Hons) Computer Science Engineering",
    company: "University of Ruhuna",
    location: "Galle, Sri Lanka",
    type: "Education",
    description: [
      "Pursuing Bachelor's degree with GPA of 3.75/4.0",
      "Focused on software development, algorithms, and data structures",
      "Specialized in cloud computing and distributed systems",
    ],
    icon: React.createElement(FaUniversity),
    date: "2021 - 2025",
    skills: ["Algorithms", "Data Structures", "Software Engineering", "Cloud Computing"],
    companyLogo: "https://images.unsplash.com/photo-1562774053-701939374585?w=80&h=80&fit=crop",
  },
] as const;

export const projectsData = [
  {
    title: "QR Payment Integration System",
    description:
      "Developed end-to-end QR payment system with backend services handling real-time transaction processing at PickMe. Built with microservices architecture for scalability.",
    tags: ["Kotlin", "Golang", "REST APIs", "Microservices", "TiDB"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    Url: "",
    company: "PickMe",
    featured: true,
  },
  {
    title: "Driver Pooling Algorithm",
    description:
      "Implemented Traveling Salesman algorithm for efficient driver allocation and route optimization. Reduced average wait times and improved driver utilization.",
    tags: ["Golang", "Algorithms", "Optimization", "Goroutines"],
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    Url: "",
    company: "PickMe",
    featured: true,
  },
  {
    title: "TiDB Backend Service",
    description:
      "Developed Golang microservices for TiDB deployment addressing MySQL scalability bottlenecks with horizontal scaling capabilities on AWS EC2.",
    tags: ["Golang", "TiDB", "SQL", "AWS EC2", "Microservices"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    Url: "",
    company: "PickMe",
    featured: false,
  },
  {
    title: "Cloud Resource Optimization with ML",
    description:
      "Developed ML models using LSTM for cloud resource prediction and cost optimization with accurate infrastructure forecasting capabilities.",
    tags: ["Python", "LSTM", "Google Gemini", "AWS", "Machine Learning"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    Url: "",
    company: "Octobus BI",
    featured: true,
  },
  {
    title: "Gen AI Gated Model Prediction",
    description:
      "Built Gen AI layer using ReAct architecture to handle out-of-distribution predictions with advanced prompt engineering techniques.",
    tags: ["Python", "Prompt Engineering", "ReAct", "LLM", "ReactJS"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    Url: "",
    company: "Octobus BI",
    featured: false,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work and skills as a Software Engineer. Built with Next.js and Framer Motion.",
    tags: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind"],
    imageUrl: portfolio,
    Url: "https://asamsm.vercel.app/",
    company: "Personal",
    featured: false,
  },
  {
    title: "Django Full Stack Application",
    description:
      "A Django-based ticket booking application demonstrating full-stack development capabilities as a Capstone project for Meta certification.",
    tags: ["Django", "Python", "REST API", "Bootstrap", "PostgreSQL"],
    imageUrl: littlelemon,
    Url: "https://www.linkedin.com/posts/mohamed-asam-733768203_django-fullstack-activity-7083291011598225408-jHMY",
    company: "Meta Capstone",
    featured: false,
  },
] as const;

export const AchivementData = [
  {
    title: "1st Runner Up - CodeRally 6.0",
    description:
      "Secured 1st runner up position in CodeRally 6.0 Coding Competition, demonstrating strong algorithmic problem-solving skills and competitive programming abilities.",
    tags: ["Competitive Programming", "Algorithms", "Problem Solving"],
    imageUrl: haxtreme,
    Url: "",
    date: "Sep 2025",
  },
  {
    title: "2nd Runner Up - Haxtreme 2.0",
    description:
      "Achieved 2nd runner up position in Haxtreme 2.0 Coding Competition organized by Faculty of Engineering, University of Ruhuna. Competed against 100+ teams and secured 3rd place with 726 points.",
    tags: ["Data Structures", "Algorithms", "Coding"],
    imageUrl: haxtreme,
    Url: "https://www.linkedin.com/posts/mohamed-asam-733768203_codeabrconquerers-haxtremeabr2-ieee-activity-7158715262123286528-noIR",
    date: "Oct 2023",
  },
  {
    title: "HackerRank Achievements",
    description:
      "Consistently solving coding challenges on HackerRank platform, earning multiple badges and certifications in various programming domains and algorithms.",
    tags: ["Data Structures", "Algorithms", "Multiple Languages"],
    imageUrl: hackerrank,
    Url: "https://www.hackerrank.com/",
    date: "Ongoing",
  },
] as const;

export const certificationsData = [
  {
    title: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    icon: React.createElement(SiKubernetes),
  },
  {
    title: "Full-Stack Developer with Django",
    issuer: "Meta",
    icon: React.createElement(FaCode),
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    icon: React.createElement(FaCloud),
  },
  {
    title: "Software Engineering Role Certification",
    issuer: "HackerRank",
    icon: React.createElement(FaCode),
  },
] as const;

export const skillsData = {
  "Programming Languages": ["Golang", "Kotlin", "Python", "JavaScript", "TypeScript"],
  "Frontend Development": ["React", "ReactJS", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  "Backend Development": ["REST APIs", "Microservices", "Django", "Goroutines", "Spring Boot"],
  "Databases": ["MySQL", "TiDB (NewSQL)", "PostgreSQL", "MongoDB"],
  "Cloud Platforms": ["GCP", "AWS (EC2, Lambda, S3, CloudWatch)"],
  "DevOps & Tools": ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Git", "Terraform"],
  "Other Technologies": ["Kafka", "Grafana", "Prometheus", "Shell Scripting"],
} as const;
