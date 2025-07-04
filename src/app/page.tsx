"use client";
import AiMesage from "@/components/messeges/AiMesage";
import Header from "@/components/header";
import { ModeToggle } from "@/components/theme/toggle-button";
import React, { useState } from "react";
import HumanMessage from "@/components/messeges/HumanMessage";
import { Button } from "@/components/ui/button";
import InputBox from "@/components/input-box";

export default function Home() {
  const [messeges, setMesseges] = useState<any>([]);
  const [solution, setSolution] = useState("");
  const [input, setInput] = useState("");
  const handleClick = async () => {
    const response = await fetch("api/solution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "data": input }),
    });
    const data = await response.json();
    setSolution(data.solution);

    setMesseges((prev: any) => [
      ...prev,
      <HumanMessage HumanMessage={input} />,
      <AiMesage AiMessage={data.solution} />,
    ]);
    setInput("");
  };

  return (
    <div>
      <ol className="mt-3 pt-3">
        {messeges.map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <InputBox input={input} handleClick={handleClick} setInput={setInput} />
    </div>
  );
}
