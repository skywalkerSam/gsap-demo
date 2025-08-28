"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FromPage() {
  useGSAP(() => {
    gsap.from("#green-box", {
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
    gsap.from("#green-box-2", {
      x: 360,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
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
          >
            gsap.from()
          </a>
        </em>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="bg-primary h-20 w-20 rounded-lg" />
      </div>
      <div className="mt-20">
        <div id="green-box-2" className="bg-primary h-20 w-20 rounded-lg" />
      </div>
    </main>
  );
}
