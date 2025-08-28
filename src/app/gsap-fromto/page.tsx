"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FromToPage() {
  useGSAP(() => {
    gsap.fromTo(
      "#orange-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        y: 300,
        rotation: 360,
        borderRadius: "100%",
        duration: 2,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
      },
    );
  });

  return (
    <main>
      <h1 className="text-primary text-6xl">GSAP FromTo</h1>

      <p className="mt-5">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5">
        Read more about the{" "}
        <em><a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="hover:text-green-600"
        >
          gsap.fromTo()
        </a></em>{" "}
        method.
      </p>

      <div className="mt-20 justify-items-end">
        <div id="orange-box" className="h-20 w-20 rounded-lg bg-orange-400" />
      </div>
    </main>
  );
}
