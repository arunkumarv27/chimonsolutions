/* eslint-disable */

"use client";

import { useEffect } from "react";
import posthog from "posthog-js";


interface LocationDetails {
    town: string;
    state: string;
}










export default function Analytics() {
    useEffect(() => {
        posthog.init('phc_sIPDp70MVXuEsdeNLxNlWm4SA3mpFKDHY3VrsCCofUg', {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'identified_only',
        });


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;









                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.warn('Geolocation is not supported by this browser.');
        }


    }, []);

    return null; // This component doesn't render any UI-related elements.
}
