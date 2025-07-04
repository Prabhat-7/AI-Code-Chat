import React from "react";
import { ModeToggle } from "./theme/toggle-button";

export default function Header() {
  return (
    <div className=" flex items-center justify-center p-2 pt-1   ">
      <h1 className=" font-bold text-3xl">AI CODE CHAT</h1>
      <div className=" absolute right-3 top-2">
        <ModeToggle />
      </div>
    </div>
  );
}
