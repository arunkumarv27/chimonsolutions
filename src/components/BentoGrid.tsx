/* eslint-disable */
import {
    LockClosedIcon,
    BarChartIcon,
    CodeIcon,

} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
    {
        Icon: CodeIcon,
        name: "Cloud Migration",
        description: "Seamlessly transition to cloud platforms with zero downtime and optimized performance.",
        href: "/services/cloud",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" src="/cloud-bg.svg" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: LockClosedIcon,
        name: "Cybersecurity Solutions",
        description: "Protect your digital assets with real-time threat detection and compliance monitoring.",
        href: "/services/cybersecurity",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" src="/security-bg.svg" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: BarChartIcon,
        name: "AI & Data Analytics",
        description: "Leverage AI-driven insights to optimize business decisions and drive growth.",
        href: "/services/ai-ml",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" src="/ai-bg.svg" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: CodeIcon,
        name: "Software Development",
        description: "Custom software and app development tailored to your business needs.",
        href: "/services/software-development",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" src="/dev-bg.svg" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: CodeIcon, // Replace with an available icon
        name: "DevOps & Automation",
        description:
            "Enhance your CI/CD pipelines and automate infrastructure for faster, more efficient deployments.",
        href: "/services/devops",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" src="/devops-bg.svg" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

function BentoDemo() {
    return (
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}

export { BentoDemo };
