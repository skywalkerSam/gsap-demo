"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ToPage() {
  useGSAP(() => {
    gsap.to("#g-box", {
      y: 360,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
      //   ease: "elastic",
      repeat: -1,
      yoyo: true, // will make the animation reverse on every other cycle
    });
  });

  useGSAP(() => {
    gsap.to("#g-box-2", {
      x: 720,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
      //   ease: "elastic",
      repeat: -1,
      yoyo: true, // will make the animation reverse on every other cycle
    });
  });

  return (
    <main className="min-h-screen">
      <h1 className="text-6xl">GSAP To</h1>
      <p className="mt-5">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5">
        Read more about the{" "}
        <em>
          <a
            href="https://greensock.com/docs/v3/GSAP/gsap.to()"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            gsap.to()
          </a>
        </em>{" "}
        method.
      </p>

      <div className="mt-20 justify-items-end">
        <div id="g-box" className="bg-primary h-20 w-20 rounded-lg" />
      </div>

      <div className="mt-20 justify-items-start">
        <div id="g-box-2" className="bg-primary h-20 w-20 rounded-lg" />
      </div>
    </main>
  );
}
