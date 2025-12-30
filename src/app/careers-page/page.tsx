import { Metadata } from "next";
import { CareersClient } from "./careers-client";

export const metadata: Metadata = {
  title: "Careers & Job Openings | What Next Studio",
  description:
    "Join What Next Studio! We're hiring talented Graphic Designers, Social Media Managers, Web Developers, SEO Consultants, Video Editors, and Product Photographers. 100% remote positions with collaborative culture and meaningful work.",
  keywords: ["marketing jobs", "remote jobs", "graphic designer jobs", "web developer jobs", "social media manager", "SEO consultant", "video editor jobs"],
  openGraph: {
    title: "Careers & Job Openings | What Next Studio",
    description: "Be part of our mission. Join our team of passionate professionals creating remarkable brands.",
    type: "website",
  },
};

const positions = [
  {
    title: "Graphic Designer",
    category: "Design",
    description: "We're looking for a creative graphic designer to bring brand stories to life.",
    remote: true,
    fullTime: true
  },
  {
    title: "Social Media Manager",
    category: "Marketing",
    description: "We're looking for a social media strategist to amplify our clients' voices.",
    remote: true,
    fullTime: true
  },
  {
    title: "Web Developer",
    category: "Development",
    description: "We're looking for a skilled web developer to build exceptional digital experiences.",
    remote: true,
    fullTime: true
  },
  {
    title: "SEO Consultant",
    category: "Marketing",
    description: "We're looking for an SEO expert to drive organic growth for our clients.",
    remote: true,
    fullTime: true
  },
  {
    title: "Video Editor",
    category: "Design",
    description: "We're looking for a talented video editor to craft compelling visual narratives.",
    remote: true,
    fullTime: true
  },
  {
    title: "Product Photographer",
    category: "Design",
    description: "We're looking for a skilled product photographer to capture stunning brand visuals.",
    remote: true,
    fullTime: true
  }
];

const benefits = [
  {
    title: "100% Remote",
    description: "Work from anywhere in the world"
  },
  {
    title: "Collaborative Culture",
    description: "Flat hierarchies, open communication"
  },
  {
    title: "Meaningful Work",
    description: "Projects that make an impact"
  },
  {
    title: "Growth Focused",
    description: "Learn, evolve, and level up"
  }
];

const values = [
  "Ownership and responsibility",
  "Clear communication",
  "Creative excellence",
  "Continuous learning",
  "Client success first"
];

const filters = ['View all', 'Design', 'Development', 'Marketing'];

export default function CareersPage() {
  return (
    <CareersClient 
      positions={positions}
      benefits={benefits}
      values={values}
      filters={filters}
    />
  );
}