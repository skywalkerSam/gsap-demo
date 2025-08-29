"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function StaggerPage() {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 90,
      rotation: 90,
      borderRadius: "50%",
      // ease: "power3.inOut",
      // ease: "bounce.Out",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.07,
        from: "edges",
      },
      // stagger: 0.5,
      // stagger: {
      //   amount: 0.5, // the amount of time to stagger the animations between each element
      //   grid: [2, 1], // the number of columns and rows in the grid
      //   axis: "y", // the axis along which to stagger the animations
      //   // ease: "circ.inOut",
      //   // ease: "bounce.Out",
      //   from: "edges", // the starting position of the staggered animations
      // },
      duration: 0.9,
    });

    gsap.to(".stagger-box-2", {
      y: -70,
      rotation: 90,
      borderRadius: "50%",
      // ease: "power3.inOut",
      // ease: "bounce.Out",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.07,
        from: "edges",
      },
      // stagger: 0.5,
      // stagger: {
      //   amount: 0.5, // the amount of time to stagger the animations between each element
      //   grid: [2, 1], // the number of columns and rows in the grid
      //   axis: "y", // the axis along which to stagger the animations
      //   // ease: "circ.inOut",
      //   from: "edges", // the starting position of the staggered animations
      // },
      duration: 0.9,
    });
  });

  return (
    <main>
      <h1 className="text-primary text-6xl">GSAP Stagger</h1>

      <p className="mt-5">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5">
        Read more about the{" "}
        <em>
          <a
            href="https://gsap.com/resources/getting-started/Staggers"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="hover:text-green-600"
          >
            Gsap Stagger
          </a>
        </em>{" "}
        feature.
      </p>

      <div className="mt-20 justify-items-center">
        <div className="flex gap-5">
          <div className="stagger-box h-20 w-20 rounded-xl bg-sky-400/60" />
          <div className="stagger-box h-20 w-20 rounded-xl bg-sky-400/60" />
          <div className="stagger-box h-20 w-20 rounded-xl bg-sky-400/60" />
          <div className="stagger-box h-20 w-20 rounded-xl bg-sky-400/60" />
          <div className="stagger-box h-20 w-20 rounded-xl bg-sky-400/60" />
          <div className="stagger-box h-20 w-20 rounded-xl bg-sky-400/60" />
          <div className="stagger-box h-20 w-20 rounded-xl bg-sky-400/60" />
        </div>
      </div>
      <div className="mt-20 justify-items-center">
        <div className="flex gap-5">
          <div className="stagger-box-2 h-20 w-20 rounded-xl bg-yellow-400/60" />
          <div className="stagger-box-2 h-20 w-20 rounded-xl bg-yellow-400/60" />
          <div className="stagger-box-2 h-20 w-20 rounded-xl bg-yellow-400/60" />
          <div className="stagger-box-2 h-20 w-20 rounded-xl bg-yellow-400/60" />
          <div className="stagger-box-2 h-20 w-20 rounded-xl bg-yellow-400/60" />
          <div className="stagger-box-2 h-20 w-20 rounded-xl bg-yellow-400/60" />
          <div className="stagger-box-2 h-20 w-20 rounded-xl bg-yellow-400/60" />
        </div>
      </div>
    </main>
  );
}
