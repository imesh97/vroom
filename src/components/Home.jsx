import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["people.", "planet.", "lifestyle."],
      typeSpeed: 100,
      backSpeed: 120,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-light">
      <div className="max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-dgreen font-semibold p-2 text-lg">
          THE ENVIRONMENTALLY-FRIENDLY
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
          Traffic Assistant.
        </h1>
        <div className="flex justify-center items-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-semibold">
            Built for our
          </p>
          <p className="md:text-5xl sm:text-4xl text-xl font-semibold md:pl-4 pl-2">
            <span ref={typedElement} />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-semibold text-gray-500 md:py-2 px-2">
          Monitor your daily gas emissions while navigating with Maps. A
          solution to improving your carbon footprint.
        </p>
        <button className="bg-dgreen w-[200px] rounded-md font-semibold my-6 mx-auto text-lg py-4 text-dark">
          <Link to="/navigate">Get Started</Link>
        </button>
      </div>
    </div>
  );
}
