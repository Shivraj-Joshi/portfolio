import React from "react";
import image from "../assets/ecom.png";
import image2 from "../assets/portfolio.png";
import image3 from "../assets/chatbot.png";
export const ProjectData = [
  {
    id: 1,
    title: "StyleClub",
    description: "this is an ecommerce website ",
    image: image,
    github: "https://github.com/Shivraj-Joshi/styleClub",
    live: "https://style-club-eight.vercel.app/",
    tech: ["React", "Tailwind Css", "Firebase", "Redex"],
  },
  {
    id: 2,
    title: "AssistGPT",
    description: "AI Chatbot Using Google Gemini API ",
    image: image3,
    github: "https://github.com/Shivraj-Joshi/chatbot",
    live: "https://chatbot-drab-alpha.vercel.app/",
    tech: ["React", "Tailwind CSS", "Google Gemini API"],
  },
  {
    id: 3,
    title: "Portfolio",
    description: "this is an Portfolio website ",
    image: image2,
    github: "https://github.com/Shivraj-Joshi/portfolio",
    live: "https://portfolio-shivraj-joshis-projects.vercel.app/",
    tech: ["React", "Tailwind Css"],
  },
];
