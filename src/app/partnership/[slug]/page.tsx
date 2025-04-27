"use client";

import React from "react";
import { useParams } from "next/navigation";
import NavigationBar from "@/components/NavigationBar";
import { Footerdemo } from "@/components/ui/footer-section";
import NavContentPartnership from "@/components/NavContentPartnership";

export default function ServicePage() {

  const params = useParams();


  const slug = params.slug; // or const { slug } = params;


  return (
    <div className="min-h-screen">
      <NavigationBar />
      <NavContentPartnership slug={slug as string}/>
      <Footerdemo />
    </div>
  );
}
