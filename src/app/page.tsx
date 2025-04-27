/* eslint-disable */
"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head"; // Import Head for favicon
import Analytics from "./Analytics";
import HomePage from "@/components/HomePage";
import { OurClients } from "@/components/OurClients";
import FeatureSectionTwo from "@/components/FeatureSectionTwo";
import { HeroSectionDemo } from "./demo";
import DigitalServicesCards from "@/components/DigitalServicesCards";
import Features from "@/components/Features";
import FullScreenBanner from "@/components/FullScreenBanner";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import Testimonals from "@/components/Testimonals";
import { Footerdemo } from "@/components/ui/footer-section";
import ContactSection from "@/components/ContactSection";
import FeatrueSectionAnother from "@/components/FeatureSectionAnother";
import VarenyaSplash from "@/components/VarenyaSplash";
import NavigationBar from "@/components/NavigationBar";
import TopHeader from "./TopHeader";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [showTopHeader, setShowTopHeader] = useState(false);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // show shadow after scrolling
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopHeader(true);
      } else {
        setShowTopHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // home page video
  // slide right
  // contact us hame age
  // easy apply
  // font and font size 
  // orange -> blue
  // explore our technologies, hove stop
  // testimonals 
  return (
    <div>
      <Head>
        <link rel="icon" href="/VarenyasHorizontalpng.png" />
        <title>Chimon Solutions - Home</title>
      </Head>


      <div
        className={`top-0 z-50 w-full sticky transition-all duration-300 ${isScrolled ? "shadow-md bg-white" : "bg-transparent"
          }`}
      >
        <TopHeader />
      </div>

      <NavigationBar />
      <HomePage onContactClick={scrollToContact} />
      <OurClients />

      <FeatureSectionTwo />
      <FeaturesSectionWithHoverEffects />
      <Features />

      <div className="hidden md:block">
        <DigitalServicesCards />
      </div>
      <FullScreenBanner />
      <Testimonals />
      <Footerdemo />
    </div>
  );
}