"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerPage() {
  const scrollRef = useRef(0);

  useGSAP(
    () => {
      // get all the boxes in the scrollRef
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          y: 180 * (boxes.indexOf(box) + 0.9),
          // x: 150 * (boxes.indexOf(box) + 4.5),
          rotation: 90,
          borderRadius: "60%",
          scale: 1.3,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", // when the bottom of the box hits the bottom of the viewport
            end: "top 30%", // end when the top of the box hits 20% from the top of the viewport
            scrub: true, // scrubbing makes the animation smooth
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef },
  );

  return (
    <main>
      <h1 className="text-primary text-6xl">GSAP ScrollTrigger</h1>

      <p className="mt-5">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5">
        Read more about the{" "}
        <em>
          <a
            href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="hover:text-green-600"
          >
            gsap scroll trigger
          </a>
        </em>{" "}
        method.
      </p>

      <div className="flex h-[70vh] w-full flex-col items-center justify-center">
        <p className="text-center">Scroll down to see the animation</p>

        <svg
          className="mt-5 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 h-screen w-full justify-items-center" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box h-20 w-20 rounded-xl bg-sky-950/30"
        />
        <div
          id="scroll-orange"
          className="scroll-box h-20 w-20 rounded-xl bg-blue-950/30"
        />
      </div>
    </main>
  );
}
