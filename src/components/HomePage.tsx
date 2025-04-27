/* eslint-disable */
"use client";

import React from "react";

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <>
      <div className="overflow-x-hidden">
        <header className="hero-overlay">
          <div className="image-background" />
          <div className="content">
            <div className="home-hero-h2 h2">
              <h1>Transform Your Business with Cutting-Edge IT Solutions</h1>
            </div>
            <span className="heading_caps-lg new-universe">
              Chimon Solutions Inc provides expert IT consulting, AI-driven solutions, cloud transformations, and cybersecurity services to accelerate your business growth.
            </span>
          </div>
        </header>

        <style jsx>{`
  .hero-overlay {
    position: relative;
    height: 800px;
    overflow: hidden;
    display: flex;
    align-items: flex-start; /* Move content to top */
    justify-content: center;
    background-color: var(--royal-blue);
  }
  .image-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/herobackgroundVarenya.jpeg");
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 2;
    text-align: center;
   color: #000;

    padding-top: 80px; /* Add padding from top */
  }
  .home-hero-h2 {
    letter-spacing: 0.25em;
  }
  .heading_caps-lg.new-universe {
    letter-spacing: 0.004em;
  }
  .h2 {
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Overpass, sans-serif;
    font-size: 47px;
    font-weight: 700;
    line-height: 51px;
  }
`}</style>

      </div>
    </>
  );
}
