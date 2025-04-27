"use client";

import ContactSection from "@/components/ContactSection";
import NavigationBar from "@/components/NavigationBar";
import { Footerdemo } from "@/components/ui/footer-section";

export default function ContactUs() {
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <ContactSection />
            <Footerdemo />
        </div>
    );
}
