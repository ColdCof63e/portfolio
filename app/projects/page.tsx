import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
("use client");

const PROJECTS = [
  {
    title: "Portfolio",
    platform: "Web Application",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "Google Agentic AI - Antigravity",
    ],
    description: [
      "Built modern portfolio website using Next.js and TypeScript, implementing responsive design and dynamic content loading with Shadcn UI components and Framer Motion for smooth animations",
      "Integrated Google Agentic AI - Antigravity for AI-powered content generation and optimization, enhancing user experience and website functionality",
      "Optimized website performance through rigorous lifecycle debugging and memory management, ensuring smooth camera operations and responsive AI processing",
    ],
    link: "",
  },
  {
    title: "Point and Say",
    platform: "Android",
    techStack: ["Kotlin", "Gemini AI", "ML Kit", "CameraX", "Firebase"],
    description: [
      "Built AI-powered Android learning application integrating Google Gemini API and ML Kit for real-time object identification and natural language articulation using device camera",
      "Implemented Text-to-Speech (TTS) and microphone input capabilities for interactive speech practice, creating engaging learning experience with voice feedback mechanisms",
      "Optimized application performance through rigorous lifecycle debugging and memory management, ensuring smooth camera operations and responsive AI processing",
    ],
    link: "https://github.com/ColdCof63e/PointAndSay",
  },
  {
    title: "Eatsy",
    platform: "Full Stack Web Application",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description: [
      "Developed full-stack food ordering platform with React frontend and Node.js/Express backend, implementing Role-Based Access Control (RBAC) with distinct User and Admin dashboards for order management",
      "Engineered secure authentication and session management system using JWT tokens and bcrypt password hashing, protecting sensitive user data and ensuring compliance with security best practices",
      "Architected RESTful API with comprehensive CRUD operations for menu items, orders, and user management, implementing input validation and error handling middleware",
    ],
    link: "https://github.com/2025-Fall-ITE-5425-0TA/project-webmates",
  },
  {
    title: "Stock Market Simulation",
    platform: "Microservice Application",
    techStack: ["Java, Spring Boot, Microservices"],
    description: [
      "Built modular backend system featuring distinct Account, Market, and Order microservices to simulate real-world distributed transaction environment with service-to-service communication",
      "Structured application using microservices principles and Spring Boot framework, enabling independent development, deployment, and scaling of core business functions",
      "Managed server-side logic and data persistence with transaction management to support reliable order execution, account balance updates, and user management workflows",
    ],
    link: "https://github.com/ColdCof63e/EAMProject",
  },
  {
    title: "Enterprise GenAI",
    platform: "Knowledge Graph RAG System",
    techStack: ["Python", "Neo4j", "GraphRAG", "AI"],
    description: [
      "Built enterprise-grade AI tool leveraging Neo4j graph database and Python, implementing GraphRAG (Retrieval-Augmented Generation) principles to improve contextual search accuracy by 45% over traditional keyword search",
      "Implemented Knowledge Graph architecture using Cypher query language to structure complex entity relationships, enabling more precise information retrieval and contextual understanding",
      "Integrated Generative AI models with graph-based context to solve complex domain-specific problems, demonstrating advanced understanding of modern AI architectures and retrieval systems",
    ],
    link: "https://github.com/ColdCof63e/Neo4j-Project",
  },
  {
    title: "Human Activity Recognition",
    platform: "Deep Learning System ",
    techStack: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    description: [
      "Built neural network classifier to distinguish between physical activities using comprehensive dataset with 561 distinct sensor features, achieving 94% classification accuracy",
      "Designed and trained Deep Neural Network (DNN) using TensorFlow/Keras with multiple hidden layers to process high-dimensional inputs efficiently, implementing dropout and batch normalization for improved generalization",
      "Conducted comprehensive model evaluation and hyperparameter tuning using cross-validation techniques, optimizing learning rate, batch size, and network architecture for accurate multi-class predictions",
    ],
    link: "https://github.com/ColdCof63e/Human-Activity-Recognition",
  },
  {
    title: "Interactive Data Visualization App",
    platform: "Shiny Application",
    techStack: [
      "R",
      "Shiny",
      "ggplot2",
      "dplyr",
      "tidyr",
      "readr",
      "purrr",
      "tidyverse",
      "Data Analytics",
    ],
    description: [
      "Built interactive Shiny web application for real-time data visualization and analysis, structuring modular UI and server components to support dynamic user inputs and reactive results",
      "Implemented reactive data-driven components with custom filters, parameterized analytics, and modular reactivity patterns enhancing user experience and application scalability",
      "Delivered responsive, visually rich application demonstrating analytical insights, improving data interpretation efficiency by 40% during peer evaluations through intuitive visualizations",
    ],
    link: "https://github.com/ColdCof63e/Data-Visualization-App-R-Shiny",
  },
  {
    title: "Dota 2 - Results Prediction",
    platform: "Machine Learning Model",
    techStack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Analytics",
    ],
    description: [
      "Analysed 10,294-match Kaggle dataset with 117 features; applied PCA, engineered features, and trained Random Forest to predict outcomes, with K-means + PCA for pattern discovery and insights across hero/role attributes.",
      "Integrated a 33-hero, 126-attribute dataset to enrich features; used visualization and evaluation to surface actionable trends and model performance improvements.",
    ],
    link: "https://github.com/ColdCof63e/Machine_Learning_Project",
  },
  {
    title: "Workout App",
    platform: "Android Application",
    techStack: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"],
    description: [
      "Built an Android workout app in Kotlin focused on home screen flows; integrated Firebase for real-time data sync and persistence to enable responsive UX.",
    ],
    link: "https://github.com/ColdCof63e/AndroidDevelopment1/tree/project",
  },
  {
    title: "Restaurants Ordering System",
    platform: "Web Application",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description: [
      "Developed a Node.js/JavaScript + Handlebars web app listing restaurant details; integrated MongoDB for storage and shipped via CI/CD and Vercel for rapid, scalable deployments.",
      "Vercel (Demo): https://web-framework1-8zatkp888-coldcof63es-projects.vercel.app",
    ],
    link: "https://github.com/ColdCof63e/WebFramework1/tree/projectV1",
  },
  {
    title: "Health Data Logger",
    platform: "Windows Application",
    techStack: [
      "C#",
      "Java",
      "SQL Server",
      ".NET",
      "Windows Forms",
      "Visual Studio",
      "JavaFX",
      "Hibernate",
      "JDBC",
    ],
    description: [
      "Built a role-based Windows app for Patients/Technicians with two implementations: Java/JavaFX client–server and C#/.NET client–database; enabled record CRUD and admin management workflows",
      "Implemented with: ",
      "Java Programming and Java FX framework with Client-Server Architecture",
      "C# and .Net framework with Client-Database Architecture",
    ],
    link: "https://github.com/ColdCof63e/AdvancedJava-HealthDataLogger",
  },
  {
    title: "Bank Marketing",
    platform: "Data Analytics",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analytics"],
    description: [
      "Preprocessed data and trained predictive models; produced an analysis report highlighting key drivers and model outcomes for marketing performance.",
    ],
    link: "https://github.com/ColdCof63e/Bank-Marketing",
  },
  {
    title: "Robe",
    platform: "Web Application Basic",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    description: [
      "Created an e-commerce site using HTML/CSS/JavaScript with account creation and responsive layouts via media queries across all pages.",
    ],
    link: "https://github.com/ColdCof63e/robe",
  },
  {
    title: "Online Food Ordering App",
    platform: "Java - Minor Project",
    techStack: ["Java"],
    description: [
      "Implemented a basic Java application to place restaurant orders; structured domain classes (e.g., Restaurant) and composed flows to demonstrate core ordering functionality.",
    ],
    link: "https://github.com/ColdCof63e/NSPB_final",
  },
];

export default function ProjectsPage() {
  return (
    <main
      className="min-h-screen 
      bg-gray-50 
      dark:bg-gray-900 
      py-12 
      px-4 
      sm:px-6 
      lg:px-8"
    >
      <Link href="/">
        <ArrowLeftIcon className="inline content-start w-6 h-6" /> Back
      </Link>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl 
            font-extrabold 
            text-gray-900 
            dark:text-white 
            sm:text-5xl 
            sm:tracking-tight 
            lg:text-6xl"
          >
            My Projects
          </h1>
          <p
            className="mt-5 
            max-w-xl 
            mx-auto 
            text-xl 
            text-gray-500 
            dark:text-gray-400"
          >
            A selection of my recent work and experiments.
          </p>
        </div>

        <div
          className="grid 
          grid-cols-1 
          gap-8 
          sm:grid-cols-2 
          lg:grid-cols-3"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
