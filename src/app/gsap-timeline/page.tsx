"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "~/components/ui/button";

export default function TimelinePage() {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(() => {
    timeline.to("#orange-box", {
      y: 210,
      rotation: 180,
      borderRadius: "10%",
      duration: 1,
      ease: "back.inOut",
    });

    timeline.to("#orange-box", {
      x: 210,
      scale: 1.1,
      rotation: 360,
      borderRadius: "20%",
      duration: 1.2,
      ease: "back.inOut",
    });

    timeline.to("#orange-box", {
      y: -69,
      scale: 1.2,
      rotation: 540,
      borderRadius: "30%",
      duration: 1.3,
      ease: "back.inOut",
    });

    timeline.to("#orange-box", {
      x: 450,
      scale: 1.3,
      rotation: 720,
      borderRadius: "40%",
      duration: 1.4,
      ease: "back.inOut",
    });

    timeline.to("#orange-box", {
      y: 120,
      scale: 1.4,
      rotation: 900,
      borderRadius: "50%",
      duration: 1.5,
      ease: "back.inOut",
    });

    timeline.to("#orange-box", {
      x: 900,
      scale: 2,
      rotation: 1180,
      borderRadius: "60%",
      duration: 1.6,
      ease: "power1.inOut",
    });
  });

  return (
    <main>
      <h1 className="text-primary text-6xl">GSAP Timeline</h1>

      <p className="mt-5">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5">
        Read more about the{" "}
        <em>
          <a
            href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="hover:text-green-600"
          >
            gsap.timeline()
          </a>
        </em>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <Button
          variant="outline"
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
        >
          {timeline.paused() ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </Button>

        <div id="orange-box" className="h-20 w-20 bg-orange-400" />
      </div>
    </main>
  );
}
