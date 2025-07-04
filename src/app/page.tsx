"use client";
import AiMesage from "@/components/messeges/AiMesage";
import Header from "@/components/header";
import { ModeToggle } from "@/components/theme/toggle-button";
import React, { useState } from "react";
import HumanMessage from "@/components/messeges/HumanMessage";
import { Button } from "@/components/ui/button";
import InputBox from "@/components/input-box";

export default function Home() {
  const [messeges, setMesseges] = useState<any[]>([]);
  const [solution, setSolution] = useState("");

  const [input, setInput] = useState("");
  const handleClick = async () => {
    if (input == "") return;

    setMesseges((prev: any) => [
      ...prev,
      <HumanMessage HumanMessage={input} />,
    ]);
    const tempInput = input;
    setInput("");

    setMesseges((prev: any) => [
      ...prev,
      <AiMesage AiMessage={""} isLoading={true} />,
    ]);
    const response = await fetch("api/solution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "data": tempInput }),
    });
    const data = await response.json();

    setMesseges((prev: any) => {
      const withoutLoading = prev.slice(0, -1);
      return [
        ...withoutLoading,
        <AiMesage AiMessage={data.solution} isLoading={false} />,
      ];
    });
    setInput("");
  };

  return (
    <div>
      <ol className="mt-3 pt-3 overflow-auto h-[73vh]">
        {messeges.map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <InputBox input={input} handleClick={handleClick} setInput={setInput} />
    </div>
  );
}
