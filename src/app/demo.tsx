"use client";

import { HeroSection } from "@/components/blocks/hero-section";
import { Waves } from "@/components/ui/waves-background";
import { useTheme } from "next-themes";

export function HeroSectionDemo() {
    const { theme } = useTheme();

    return (
        <div>
            <div className="relative w-full flex items-center justify-center">
                
                <HeroSection
                    badge={{
                        text: "Empowering Businesses with Digital Innovation",
                        action: {
                            text: "Explore Services",
                            href: "/services",
                        },
                    }}
                    title={
                        <div className="relative w-full h-auto bg-background/80 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center p-6">
                            <div className="absolute inset-0">
                                <Waves
                                    lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"}
                                    backgroundColor="transparent"
                                    waveSpeedX={0.02}
                                    waveSpeedY={0.01}
                                    waveAmpX={40}
                                    waveAmpY={20}
                                    friction={0.9}
                                    tension={0.01}
                                    maxCursorMove={120}
                                    xGap={12}
                                    yGap={36}
                                />
                            </div>
                            <div className="relative z-10 p-4 text-2xl font-bold bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
                                !!Transform Your Business with Cutting-Edge IT Solutions
                            </div>
                            <div className="relative z-10 p-4 text-lg bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
                                Chimon Solutions Inc provides expert IT consulting, AI-driven solutions, cloud transformations, and cybersecurity services to accelerate your business growth.
                            </div>
                        </div>
                    }
                    actions={[
                        {
                            text: "Contact us",
                            href: "/contact",
                            variant: "default",
                        },
                    ]}
                    image={{
                        light: "https://www.launchuicomponents.com/app-light.png",
                        dark: "https://www.launchuicomponents.com/app-dark.png",
                        alt: "Chimon Solutions Inc IT Consulting Services",
                    }}
                />
            </div>
        </div>
    );
}
