/* eslint-disable */
"use client";


import AIAnalytics from "@/components/AIAnalytics";
import CloudSolutions from "@/components/CloudSolutions";
import ContactSection from "@/components/ContactSection";
import CyberSecurity from "@/components/CyberSecurity";
import Devops from "@/components/Devops";
import NavigationBar from "@/components/NavigationBar";
import ProcessAutomation from "@/components/ProcessAutomation";
import { Footerdemo } from "@/components/ui/footer-section";

export default function ContactUs() {
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <Devops />
            <Footerdemo />
        </div>
    );
}
