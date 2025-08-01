import React from "react";

export default function Loading() {
  return (
    <div className="bg-card w-max h-max rounded-md ml-2 p-2 ">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
}
