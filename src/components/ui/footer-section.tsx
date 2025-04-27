/* eslint-disable */

"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Facebook,
    Instagram,
    Linkedin,
    Moon,
    Send,
    Sun,
    Twitter,
} from "lucide-react";

function Footerdemo() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [newsletterEmail, setNewsletterEmail] = React.useState("");
    const [newsletterStatus, setNewsletterStatus] = React.useState<"idle" | "success" | "error">("idle");

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: "Newsletter", // placeholder
                    lastName: "Signup",
                    email: newsletterEmail,
                    message: "Subscribed to the newsletter via footer form.",
                }),
            });

            const data = await res.json();
            if (res.ok && data.success) {
                setNewsletterStatus("success");
                setNewsletterEmail("");
            } else {
                setNewsletterStatus("error");
            }
        } catch (error) {
            console.error("Newsletter submit error:", error);
            setNewsletterStatus("error");
        }
    };

    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">
                            Stay Ahead in IT Innovation
                        </h2>
                        <p className="mb-6 text-muted-foreground">
                            Subscribe to our newsletter for insights on AI, cloud computing,
                            cybersecurity, and IT strategy.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="relative">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                                className="pr-12 backdrop-blur-sm"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                        {newsletterStatus === "success" && (
                            <p className="text-green-500 mt-2 text-sm">Subscribed successfully!</p>
                        )}
                        {newsletterStatus === "error" && (
                            <p className="text-red-500 mt-2 text-sm">Subscription failed. Try again.</p>
                        )}


                    </div>


                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Explore</h3>
                        <nav className="space-y-2 text-sm">
                            <a href="/" className="block transition-colors hover:text-primary">
                                Home
                            </a>
                            <a href="/aboutUs" className="block transition-colors hover:text-primary">
                                About Us
                            </a>
                            <a href="/contactus" className="block transition-colors hover:text-primary">
                                Contact Us
                            </a>
                        </nav>
                    </div>


                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
                        <address className="space-y-2 text-sm not-italic">
                            <p>Chimon Solutions Inc.</p>
                            <p>2601 Little Elm Pkwy</p>
                            <p>Unit 1602, Suite B</p>
                            <p>Little Elm, TX 75068</p>
                            <p>Phone: +1-972-634-0122</p>
                            <p>Email: hr@chimonsolutions.com</p>
                        </address>
                    </div>


                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                        <div className="mb-6 flex space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Facebook className="h-4 w-4" />
                                            <span className="sr-only">Facebook</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Facebook</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Twitter className="h-4 w-4" />
                                            <span className="sr-only">Twitter</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Twitter</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Instagram className="h-4 w-4" />
                                            <span className="sr-only">Instagram</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Instagram</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href="https://www.linkedin.com/company/Chimon Solutionsinc/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" size="icon" className="rounded-full">
                                                <Linkedin className="h-4 w-4" />
                                                <span className="sr-only">LinkedIn</span>
                                            </Button>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Connect with us on LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>


                        {/* <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            <Switch
                                id="dark-mode"
                                checked={isDarkMode}
                                onCheckedChange={setIsDarkMode}
                            />
                            <Moon className="h-4 w-4" />
                            <Label htmlFor="dark-mode" className="sr-only">
                                Toggle dark mode
                            </Label>
                        </div> */}
                    </div>
                </div>


                <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t pt-8 text-center">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Chimon Solutions Inc. All rights reserved.
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            All copyrights are owned by Chimon Solutions Inc. Unauthorized reproduction is prohibited.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export { Footerdemo };
