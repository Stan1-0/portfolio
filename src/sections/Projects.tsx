'use client';
import YOSA from "@/assets/images/YOSA.png";
import StampStampWeb from "@/assets/images/stamp-stamp-web.png";
import Agritech from "@/assets/images/Agritech.png"
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    id: 1,
    company: "YOSA",
    year: "2024",
    title: "Orphanage Website",
    results: [
      {
        id: 1,
        title:
          "Developed Yosa, a full-stack web app with admin-controlled image uploads and dynamic content management.",
      },
      {
        id: 2,
        title:
          "Integrated Paystack, enabling secure payments and seamless transactions.",
      },
      {
        id: 3,
        title:
          "Optimized frontend-backend communication, enhancing scalability and user experience.",
      },
    ],
    link: "https://yosa.netlify.app/",
    image: YOSA,
  },
  {
    id: 2,
    company: "Stamp Stamp",
    year: "2025",
    title: "Digital Loyalty Rewards Platform",
    results: [
      {
        id: 1,
        title:
          "Built the landing page for StampStamp, a digital loyalty rewards platform serving businesses across Nigeria and Ghana.",
      },
      {
        id: 2,
        title:
          "Implemented multi-currency pricing (NGN/GHS) with animated currency switcher and dynamic price formatting.",
      },
      {
        id: 3,
        title:
          "Engineered a dual-audience experience (Business vs Customer) with Framer Motion animations and mobile-optimized performance.",
      },
    ],
    link: "https://stampstamp.africa/",
    image: StampStampWeb,
  },
  {
    id: 3,
    company: "Agritech Ghana",
    year: "2026",
    title: "Digital Agricultural Marketplace",
    results: [
      {
        id: 1,
        title:
          "Engineered the frontend for a digital agricultural marketplace using React and Vite, ensuring high performance.",
      },
      {
        id: 2,
        title:
          "Designed a responsive, mobile-first interface enabling rural farmers to seamlessly list produce and buyers to manage orders.",
      },
      {
        id: 3,
        title:
          "Integrated advanced UI animations and seamless page transitions utilizing Framer Motion for a fluid user experience.",
      },
    ],
    link: "https://agritechgh.me/",
    image: Agritech, // Placeholder — replace with agritech screenshot when available
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Real-world Results"
            title="Featured Projects"
            description="A few of the projects I've worked on, both personal and professional"
          />
        </motion.div>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="sticky"
              style={{
                top: `calc(64px + ${(index + 1) * 40}px)`,
              }}
            >
              <Card
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden group transition-all duration-500 hover:shadow-[0_0_60px_-10px] hover:shadow-emerald-500/20"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                {/* Glow accent on hover */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-emerald-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.id}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0 text-emerald-400" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 btn-press hover:bg-emerald-50 transition-colors duration-200">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-2xl border border-white/10 shadow-2xl"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
