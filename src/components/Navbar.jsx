import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img
        src="/logo.png"
        alt="Vroom"
        className="max-w-[140px] sm:max-w-[200px]"
      />
      <ul className="flex font-semibold">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 bg-light text-dark rounded-lg">
          <Link to="/navigate">Navigate</Link>
        </li>
      </ul>
    </div>
  );
}
