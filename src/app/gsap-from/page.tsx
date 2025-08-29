"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FromPage() {
  useGSAP(() => {
    gsap.from("#white-box", {
      y: 360,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  useGSAP(() => {
    gsap.from("#black-box", {
      x: -360,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <main>
      <h1 className="text-6xl">GSAP From</h1>

      <p className="mt-5">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5">
        Read more about the{" "}
        <em>
          <a
            href="https://greensock.com/docs/v3/GSAP/gsap.from()"
            target="_blank"
            rel="noreferrer noopener nofollow"
          className="hover:text-green-600"

          >
            gsap.from()
          </a>
        </em>{" "}
        method.
      </p>

      <div className="mt-20 justify-items-end">
        <div id="white-box" className="bg-white/60 h-20 w-20 rounded-lg" />
      </div>
      <div className="mt-20 justify-items-end">
        <div id="black-box" className="bg-black/80 h-20 w-20 rounded-lg" />
      </div>
    </main>
  );
}
