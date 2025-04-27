"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "./use-media-query"

const cards = [
    { id: 1, title: "Card 1", description: "Some description is written here for card number 1" },
    { id: 2, title: "Card 2", description: "Some description is written here for card number 2" },
    { id: 3, title: "Card 3", description: "Some description is written here for card number 3" },
    { id: 4, title: "Card 4", description: "Some description is written here for card number 4" },
    { id: 5, title: "Card 5", description: "Some description is written here for card number 5" },
    { id: 6, title: "Card 6", description: "Some description is written here for card number 6" },
    { id: 7, title: "Card 7", description: "Some description is written here for card number 7" },
]

export default function ExpandingCards() {
    const [activeCard, setActiveCard] = useState(1)
    const desktopMedium = useMediaQuery("(min-width: 768px)")

    const startWidth = desktopMedium ? 80 : 100
    const endWidth = desktopMedium ? 422 : 432

    return (
        <div className="min-h-screen bg-black p-8">
            <div className="mx-auto flex max-w-[1140px] h-[474px] gap-[18px] overflow-x-auto pb-4 items-stretch">
                {cards.map((card) => {
                    const isSelected = card.id === activeCard

                    const springConfig = {
                        width: isSelected ? endWidth : startWidth,
                        config: { mass: 2, friction: 40, tension: 600 },
                    }

                    return (
                        <motion.div
                            key={card.id}
                            className="relative shrink-0 cursor-pointer rounded-lg bg-zinc-800"
                            onHoverStart={() => setActiveCard(card.id)}
                            animate={springConfig}
                            style={{ width: springConfig.width }}
                        >
                            <div className="h-full overflow-hidden">
                                <div className="w-[422px] h-full relative">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white origin-top-left rotate-90 absolute left-[78px] top-[32px] h-[80px] flex items-center">
                                            {card.title}
                                        </h3>
                                        <div className="absolute inset-0 flex flex-col">
                                            <p
                                                className={`mt-auto text-sm text-zinc-400 transition-opacity duration-300 delay-100 px-8 pb-12 ${isSelected ? "opacity-100" : "opacity-0"
                                                    }`}
                                            >
                                                {card.description} {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

