"use client"
import CareerPage from "@/components/CareerPage"
import NavigationBar from "@/components/NavigationBar";
import { Footerdemo } from "@/components/ui/footer-section";
import { useEffect, useState } from "react";

export default function Careers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen">
      <NavigationBar />
      {isClient && <CareerPage />}
      <Footerdemo />
    </div>
  );
}