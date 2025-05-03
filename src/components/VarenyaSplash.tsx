/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } from 'matter-js';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const VarenyaSplash: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(() => !localStorage.getItem('VarenyaSplashShown'));
  const sceneRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (!showSplash) return;

    // SplitText Animation
    const headingSplit = SplitText.create(headingRef.current, {
      type: "chars, words, lines",
      mask: "lines",
    });

    const paraSplit = SplitText.create(paragraphRef.current, {
      type: "chars, words, lines",
      mask: "lines",
    });

    gsap.from([...headingSplit.chars, ...paraSplit.chars], {
      yPercent: "random([-100, 100])",
      rotation: "random(-30, 30)",
      ease: "back.out",
      autoAlpha: 0,
      repeat: 4,
      yoyo: true,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });
  }, [showSplash]);

  useEffect(() => {


    localStorage.setItem('VarenyaSplashShown', 'true');

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const render = Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
      }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);


    const floor = Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true });
    const wallLeft = Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true });
    const wallRight = Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true });
    World.add(world, [floor, wallLeft, wallRight]);


    const icons = [
      { name: 'Java', src: '/icons/java.png' },
      { name: 'Python', src: '/icons/python.png' },
      { name: 'AWS', src: '/icons/aws.png' },
      { name: 'Salesforce', src: '/icons/salesforce.png' },
      { name: 'ServiceNow', src: '/icons/servicenow.png' },
      { name: 'Workday', src: '/icons/workday.png' },
    ];

    const ICON_SIZE = 50; // Set a fixed size for all icons

    const loadedImages: { [key: string]: HTMLImageElement } = {};

    const preloadImages = async () => {
      await Promise.all(
        icons.map((icon) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = icon.src;
            img.onload = () => {
              loadedImages[icon.src] = img;
              resolve(true);
            };
            img.onerror = reject;
          });
        })
      );


      icons.forEach(icon => {
        const x = Math.random() * width;
        const body = Bodies.rectangle(x, -60, ICON_SIZE, ICON_SIZE, {
          restitution: 0.9,
          friction: 0.5,
          density: 0.8,
          render: {
            sprite: {
              texture: icon.src, // Corrected texture path
              xScale: ICON_SIZE / loadedImages[icon.src].width,  // Scale proportionally
              yScale: ICON_SIZE / loadedImages[icon.src].height, // Scale proportionally
            }
          }
        });
        World.add(world, body);
      });
    };

    preloadImages().catch((err) => console.error('Image loading failed:', err));


    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    World.add(world, mouseConstraint);
    render.mouse = mouse;

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
      render.textures = {};
    };
  }, [showSplash]);

  if (!showSplash) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-90"></div>
      <div ref={sceneRef} className="absolute inset-0 z-10 pointer-events-auto"></div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center text-white p-4">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white text-center">
          Welcome to Chimon Solutions
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-2xl mb-8 drop-shadow text-white text-center">
          Your partner in cutting-edge IT consulting solutions.
        </p>

        <motion.button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded shadow-lg hover:bg-purple-100"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}

          Get Started
        </motion.button>
    </div>
    </div >
  );
};

export default VarenyaSplash
