'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import awsBadgeImage from "@/assets/images/aws-certified-cloud-practitioner.png";
import backendCertImage from "@/assets/images/70-back-end-web-development-certificate-stanley-boateng (1).png";
import professionalFoundations from "@/assets/images/89-professional-foundations-certificate-stanley-boateng.png";
const certifications = [
    {
        id: 1,
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2025",
        link: "https://www.credly.com/badges/3e9be8df-fc63-4431-afc6-184fbe4d3a4e",
        description: "Validates foundational, high-level understanding of AWS Cloud, services, and terminology — covering cloud concepts, security, technology, and billing.",
        credlyBadgeId: "3e9be8df-fc63-4431-afc6-184fbe4d3a4e",
        color: "from-orange-400 to-amber-500",
        icon: awsBadgeImage,
    },
    {
        id: 2,
        name: "Professional Foundations",
        issuer: "ALX",
        date: "2025",
        link: "https://savanna.alxafrica.com/certificates/5cJGPfhspR",
        description: "Validates Professional Foundations in Software Engineering.",
        color: "from-sky-400 to-blue-500",
        icon: professionalFoundations,
    },
    {
        id: 3,
        name: "Back-End Web Development",
        issuer: "ALX",
        date: "2026",
        link: "https://savanna.alxafrica.com/certificates/xMpJ7Rr6zZ",
        description: "Validates expertise in back-end web development, including server-side logic, database management, and API design.",
        color: "from-sky-400 to-blue-500",
        icon: backendCertImage,
    }
];

export const CertificationsSection = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader
                        eyebrow="Credentials"
                        title="Certifications"
                        description="Professional certifications that validate my expertise"
                    />
                </motion.div>

                <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="relative rounded-3xl border border-white/10 bg-gray-800/60 backdrop-blur-sm p-6 md:p-8 h-full overflow-hidden transition-all duration-500 hover:border-emerald-400/30 hover:shadow-[0_0_40px_-8px] hover:shadow-emerald-500/20 hover:-translate-y-1">
                                {/* Background glow */}
                                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${cert.color} opacity-5 blur-2xl group-hover:opacity-15 transition-opacity duration-700`} />

                                {/* Top row: badge icon + meta */}
                                <div className="flex items-start gap-5">
                                    {/* Badge circle */}
                                    <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center shadow-lg p-1.5`}>
                                        {typeof cert.icon === 'string' ? (
                                            <span className="text-2xl">{cert.icon}</span>
                                        ) : (
                                            <Image src={cert.icon} alt={cert.name} className="w-full h-full object-contain" />
                                        )}
                                        {/* Subtle glow ring */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-30 blur-md -z-10`} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-serif text-lg md:text-xl leading-snug">
                                            {cert.name}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 mt-2">
                                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-300/10 to-sky-400/10 border border-emerald-300/20 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                                                {cert.issuer}
                                            </span>
                                            <span className="text-xs text-white/40 px-2.5 py-1 rounded-full border border-white/10">
                                                {cert.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="mt-5 mb-4 h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5" />

                                {/* Description */}
                                <p className="text-sm text-white/55 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Credly link */}
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors duration-300 group/link"
                                    >
                                        <span>{cert.link.includes('credly') ? 'Verify on Credly' : 'Verify'}</span>
                                        <ArrowUpRightIcon className="size-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* "More coming soon" indicator card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: certifications.length * 0.12, duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="relative rounded-3xl border border-dashed border-white/10 bg-gray-800/20 p-6 md:p-8 h-full min-h-[180px] flex flex-col items-center justify-center text-center gap-3 group hover:border-emerald-400/20 transition-colors duration-300">
                            <div className="text-3xl">🎯</div>
                            <p className="text-white/40 text-sm font-medium">More certifications in progress</p>
                            <p className="text-white/25 text-xs">Always learning, always growing</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
