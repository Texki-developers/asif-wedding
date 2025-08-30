import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "rgba(14,5,20, 0.3)",
        backdropFilter: "blur(10px)",
      }}
      className="fixed top-[2rem] rounded-[14px]" 
    >
      <ul className="text-white flex gap-[1rem] px-[1rem] py-[1rem] ">
        <li className="cursor-pointer text-basic">Home</li>
        <li className="cursor-pointer text-basic">Gallery</li>
        {/* <li className="cursor-pointer text-basic">Getting Here</li> */}
      </ul>
    </div>
  );
}
