import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function IntroText() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".title", { x: -360, opacity: 0, duration: 2 });
      gsap.from(".subtitle", { x: -360, opacity: 0, duration: 2, delay: 0.5 });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="w-2/5"
      style={{ transform: "rotate(-6deg)" }}
    >
      <h1 className="title text-5xl font-bold">
        Bhutan Wild <br />
        <span className="curved-underline" style={{ color: "#BCD89D" }}>
          {" "}
          Cordyceps Sinensis
        </span>
      </h1>
      <h4 className="subtitle mt-4 text-xl">
        Experience the incredible benefits of Cordyceps Sinensis. Elevate your
        energy levels, enhance your immune system, and promote overall
        well-being with our premium natural supplement.
      </h4>
    </div>
  );
}
