"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  platform: string;
  techStack: string[];
  description: string[];
  link: string;
};

export default function ProjectCard({
  title,
  platform,
  techStack,
  description,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        // delay: index * 0.1
      }}
      className="h-full"
    >
      <Link href={link} className="block group h-full">
        <div
          className="bg-white 
            dark:bg-gray-800 
            rounded-xl 
            overflow-hidden 
            shadow-sm 
            hover:shadow-xl 
            transition-all 
            duration-300 
            transform 
            hover:-translate-y-1 
            border 
            border-gray-100 
            dark:border-gray-700 
            h-full 
            flex 
            flex-col"
        >
          <div
            className="p-6 
        flex-1 
        flex 
        flex-col"
          >
            <h3
              className="text-xl 
            font-bold 
            mb-2 
            text-gray-900 
            dark:text-gray-100 
            group-hover:text-blue-600 
            dark:group-hover:text-blue-400 
            transition-colors"
            >
              {title}
              <p
                className="inline 
              dark:text-gray-400
              text-lg"
              >
                {" | "}
              </p>
              <p
                className="inline 
              text-xs 
              text-gray-600 
              dark:text-gray-300 
              italic"
              >
                {platform}
              </p>
            </h3>
            <p
              className="text-xs
            text-gray-600 
            dark:text-gray-300 
            italic mb-2"
            >
              {techStack.join(", ")}
            </p>

            <ul
              className="list-disc 
            list-outside 
            ml-4 
            text-gray-600 
            dark:text-gray-300 
            text-sm 
            leading-relaxed 
            mb-4 
            flex-1 
            space-y-1"
            >
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div
              className="text-blue-600 
            dark:text-blue-400 
            font-medium 
            text-sm 
            flex items-center 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            -translate-x-2 
            group-hover:translate-x-0 
            duration-300"
            >
              Github Link &rarr;
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
