"use client";

import DisplayCards from "@/components/ui/display-cards";
import { CpuIcon, CloudIcon, ShieldCheckIcon, CodeIcon, BarChartIcon } from "lucide-react";

const techStackCards = [
    {
        icon: <CloudIcon className="size-6 text-blue-400" />,
        title: "Cloud Computing",
        description: "Seamless cloud migration, multi-cloud strategies, and scalable cloud architectures.",
        iconClassName: "text-blue-600",
        titleClassName: "text-blue-700 font-bold",
        className:
            "translate-y-0 hover:-translate-y-2 transition-transform duration-300 shadow-lg",
    },
    {
        icon: <ShieldCheckIcon className="size-6 text-green-400" />,
        title: "Cybersecurity",
        description: "Advanced security solutions including SIEM, threat detection, and compliance management.",
        iconClassName: "text-green-600",
        titleClassName: "text-green-700 font-bold",
        className:
            "translate-y-10 hover:-translate-y-2 transition-transform duration-300 shadow-lg",
    },
    {
        icon: <CpuIcon className="size-6 text-yellow-400" />,
        title: "AI & Machine Learning",
        description: "AI-powered automation, predictive modeling, and intelligent business analytics.",
        iconClassName: "text-yellow-600",
        titleClassName: "text-yellow-700 font-bold",
        className:
            "translate-y-20 hover:-translate-y-2 transition-transform duration-300 shadow-lg",
    },
    {
        icon: <CodeIcon className="size-6 text-purple-400" />,
        title: "DevOps & Automation",
        description: "CI/CD pipelines, Kubernetes orchestration, and automation frameworks for efficiency.",
        iconClassName: "text-purple-600",
        titleClassName: "text-purple-700 font-bold",
        className:
            "translate-y-30 hover:-translate-y-2 transition-transform duration-300 shadow-lg",
    },
    {
        icon: <BarChartIcon className="size-6 text-red-400" />,
        title: "Big Data & Analytics",
        description: "Data lakes, real-time analytics, and BI solutions for data-driven insights.",
        iconClassName: "text-red-600",
        titleClassName: "text-red-700 font-bold",
        className:
            "translate-y-40 hover:-translate-y-2 transition-transform duration-300 shadow-lg",
    },
];

function DisplayCardsDemo() {
    return (
        <div className="flex flex-col items-center justify-center py-20 space-y-8">
            <div className="w-full max-w-lg">
                <DisplayCards cards={techStackCards} />
            </div>
        </div>
    );
}

export { DisplayCardsDemo };
