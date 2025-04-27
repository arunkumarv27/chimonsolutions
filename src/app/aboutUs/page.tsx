"use client";

import AboutUs from "@/components/AboutUs";
import NavigationBar from "@/components/NavigationBar";
import { Footerdemo } from "@/components/ui/footer-section";

export default function ContactUs() {
    return (
        <div className="min-h-screen">
            <NavigationBar />
            <AboutUs />
            <Footerdemo />
        </div>
    );
}
