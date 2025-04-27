import React from 'react'
import { TestimonialsSection } from './ui/testimonials-with-marquee'

const testimonials = [
    {
        author: {
            name: "Michael Anderson",
            handle: "@michael_fintech",
            avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face"
        },
        text: "Chimon Solutions Inc transformed our IT infrastructure with their cloud migration services. Downtime is down by 85%, and performance has skyrocketed.",

    },
    {
        author: {
            name: "Priya Sharma",
            handle: "@priyasecure",
            avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face"
        },
        text: "Their cybersecurity solutions helped us secure our financial data with robust encryption and real-time threat monitoring. Highly recommended!",

    },
    {
        author: {
            name: "Samantha Lee",
            handle: "@samantha_tech",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        text: "Their **DevOps automation** reduced our deployment time by 70%. Our software development lifecycle is now seamless, thanks to their expertise.",

    },
    {
        author: {
            name: "David Nguyen",
            handle: "@david_cloud",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        text: "We migrated our entire e-commerce platform to the cloud with **zero downtime**. The scalability and security improvements have been game-changers.",

    }
]

function Testimonials() {
    return (
        <div>
            <TestimonialsSection
                title="What Our Clients Say"
                description="See how businesses across industries have transformed their operations with our IT consulting expertise."
                testimonials={testimonials}
            />
        </div>
    )
}

export default Testimonials
