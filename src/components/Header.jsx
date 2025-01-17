import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/header.scss";

export const Header = () => {
  const titleRef = useRef(null); // Reference to the h3 element
  const textRef = useRef(null); // Reference to the h3 element
  const btnRef = useRef(null); // Reference to the h3 element

  useLayoutEffect(() => {
    const text = "DESIGN AGENCY";
    const chars = "ABCDEFGRSTUVWXYZ1234567890!@#$%^&*";
    const duration = 3; // Total duration of the scrambling animation

    const scrambleText = (element, text, chars, duration) => {
      const scrambledText = text
        .split("")
        .map(() => chars[Math.floor(Math.random() * chars.length)]);
      let index = 0;

      const interval = setInterval(() => {
        scrambledText[index] = text[index]; // Reveal correct character
        element.textContent = scrambledText.join("");

        index++;
        if (index >= text.length) {
          clearInterval(interval); // Stop animation when done
          // Fade in the text with GSAP
          gsap.to(element, { opacity: 1, duration: 1 });
        }
      }, (duration / text.length) * 300);
    };

    // Initially hide the text
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0, // Zoom in
        duration: 1, // 15 seconds for one cycle
        ease: "power1.inOut", // Smooth easing
      });
      gsap.from(btnRef.current, {
        delay: 1, // Delay the animation
        opacity: 0, // Zoom in
        duration: 2, // 15 seconds for one cycle
        ease: "power1.inOut", // Smooth easing
      });
      gsap.from(titleRef.current, {
        delay: 0.5, // Delay the animation
        opacity: 0, // Zoom in
        duration: 2, // 15 seconds for one cycle
        ease: "power1.inOut", // Smooth easing
        onStart: () => {
          scrambleText(titleRef.current, text, chars, duration);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="header">
      <div ref={textRef} className="header__content">
        <h1 className="white">DESIGN TO DEVELOPMENT</h1>
        <div className="header__subtitle">
          <h3 ref={titleRef} className="white">
            TAYLORDEV
          </h3>
        </div>
        <div ref={btnRef} className="header__actions">
          <button className="main-btn">MY WORK</button>
        </div>
      </div>
    </header>
  );
};
