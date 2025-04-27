"use client";

import React from "react";
import { useParams } from "next/navigation";
import NavigationBar from "@/components/NavigationBar";
import { Footerdemo } from "@/components/ui/footer-section";
import NavContentIndustries from "@/components/NavContentIndustries";

export default function ServicePage() {

  const params = useParams();


  const slug = params.slug; // or const { slug } = params;


  return (
    <div className="min-h-screen">
      <NavigationBar />
      <NavContentIndustries slug={slug as string}/>
      <Footerdemo />
    </div>
  );
}
