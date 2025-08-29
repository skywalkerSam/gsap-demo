"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ScrollTriggerPage() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".paragraph",
      {
        opacity: 0,
        y: 20,
      },
      {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        delay: 0.3,
        stagger: 0.1,
      },
    );
  }, {scope: container});

  return (
    <main ref={container}>
      <h1 id="text" className="text-primary translate-y-10 text-6xl opacity-0">
        GSAP Text
      </h1>

      <p className="paragraph mt-5 motion-safe:opacity-0 motion-safe:translate-y-5">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="paragraph mt-5 motion-safe:opacity-0 motion-safe:translate-y-5">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="paragraph mt-5 motion-safe:opacity-0 motion-safe:translate-y-5">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="paragraph mt-5 motion-safe:opacity-0 motion-safe:translate-y-5">
        Read more about the{" "}
        <em>
          <a
            href="https://greensock.com/docs/v3/Plugins/TextPlugin"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="hover:text-green-600"
          >
            TextPlugin
          </a>
        </em>{" "}
        plugin.
      </p>
    </main>
  );
}
