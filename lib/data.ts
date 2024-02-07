import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChalkboardTeacher, FaReact, FaUniversity } from "react-icons/fa";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import mllearn from "@/public/mllearn.png";
import hackerrank from "@/public/hackerrank.jpeg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import healthy from "@/public/healthy.png"
import littlelemon from "@/public/littlelemon.png"
import underdev from "@/public/underdev.jpg"


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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Achivements",
    hash: "#achivements",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "Oddamavadi, Sri Lanka",
    description:
      "I Studied My Advance Level at BT/BC/MEERAVODAI AL-HIDAYA MAHA VID.",
    icon: React.createElement(LuSchool),
    date: " 2018",
  },
  {
    title: "Teacher",
    location: "Oddamavadi, Sri Lanka",
    description:
      "I shared my knowledge with students who were practicing the A/L",
    icon: React.createElement(FaChalkboardTeacher),
    date: " 2019-2021",
  },
  {
    title: "Computer Engineering Undergraduate",
    location: "Galle, Sri Lanka",
    description:
      "Currently I am a Third Year Undergraduate Student following the Computer engineering Decipiline.",
    icon: React.createElement(FaUniversity),
    date: "2021 - 2025",
  },

] as const;

export const projectsData = [
  {
    title: "Personal HealthCareApp",
    description:
      "this is an mobiel development project using Flutter. google palm 2 Generative AI is introduced to enhance user experience.",
    tags: ["Flutter", "django", "MongoDb", "Machine Learning"],
    imageUrl: healthy,
    Url: "https://github.com/infas01/healthy-medical_app/tree/Asam2",
  },
  {
    title: "Doctor Booking App(Entirely different)",
    description:
      "This is a two semester project. I took all the chellanges In doctor booking and personal healthcare.",
    tags: ["Flutter", "react", "Spring Boot", "deep learning", "django", "MongoDb", "Machine Learning", "video streaming"],
    imageUrl: underdev,
    Url: "",
  },
  {
    title: "Maachine learning Practice Website",
    description:
      "This is an entire semeter project. In this project, Machine learning python libraries were targeted.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js","Ace code editor"],
    imageUrl: mllearn,
    Url: "https://webdev-4thsem.vercel.app/",
  },
  {
    title: "Django Full stack App",
    description:
      "This is an Django ticket Booking app. TO demonstrate the Django Knowledge, this ways created as a Capstone project of meta",
    tags: ["Django", "Python", "Rest Api", "Boostrap"],
    imageUrl: littlelemon,
    Url: "https://www.linkedin.com/posts/mohamed-asam-733768203_django-fullstack-activity-7083291011598225408-jHMY?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Point Of sale",
    description:
      "3rd semester wpf point of sale system Database-sqlite Backend - c# Frontend- XAML",
    tags: ["WPF", "C#", "Sqlite", "MaterialUI"],
    imageUrl: wordanalyticsImg,
    Url: "https://github.com/Asam8385/wpf_group_project",
  },
 
] as const;

export const AchivementData = [
  {
    title: "Haxtreme 2nd Runner up",
    description:
      "This is a Coding competition conducted by faculty of engieering, University of Ruhuna. More than 100 team was participated.\
      among these 100 team we could secure 3rd place with 726 points",
    tags: ["Data Structure","Algorithm", "Coding" ],
    imageUrl: mllearn,
    Url: "https://www.linkedin.com/posts/mohamed-asam-733768203_codeabrconquerers-haxtremeabr2-ieee-activity-7158715262123286528-noIR?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Hacker Rank",
    description:
      "Hacker rank is a one of best website to practice the coding on any language. Since Iam an undergraduate Computer engineering student and coding enthusiestic,\
      I have been using this website for more than one year.",
    tags: ["Data Structure","Algorithm", "progamming Language", "coding" ],
    imageUrl: hackerrank,
    Url: "https://www.linkedin.com/posts/mohamed-asam-733768203_so-far-this-is-my-hackerrank-achievement-activity-7141084513996091392-jf33?utm_source=share&utm_medium=member_desktop",
  },
 
 
] as const;



export const skillsData = [
  "Python",
  "Spring Boot",
  "Django",
  "Machine Learning",
  "Deep learning",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
 

] as const;
