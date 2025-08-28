import Link from "next/link";

const routes: string[] = [
  "gsap-to",
  "gsap-from",
  "gsap-fromto",
  "gsap-timeline",
  "gsap-stagger",
  "gsap-scrolltrigger",
  "gsap-text",
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-primary">GSAP</span> Demo
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {routes.map((route) => (
            <Link
              key={route}
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href={"/" + route}
              // target="_blank"
            >
              <h3 className="text-2xl font-bold">{route} →</h3>
              <div className="text-lg">
                {
                  <span>
                    {route
                      .replace("gsap", "GSAP")
                      .replace("-", " ")
                      .replace("to", "To")
                      .replace("from", "From")
                      .replace("fromto", "FromTo")
                      .replace("timeline", "Timeline")
                      .replace("stagger", "Stagger")
                      .replace("scrolltrigger", "ScrollTrigger")
                      .replace("text", "Text")}
                  </span>
                }
                {/* <span>{route.slice(0, 4).toUpperCase() + " "}</span>
                <span>{route.charAt(5).toUpperCase()}</span>
                <span>{route.slice(6)}</span>
                <span>{route.charAt(9) === "t" ? route.charAt(9).toUpperCase() + route.slice(10): ""}</span> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
