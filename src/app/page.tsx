"use client";
import AiMessage from "@/components/messeges/AiMesage";
import React, { useState } from "react";
import HumanMessage from "@/components/messeges/HumanMessage";
import { useChat } from "@ai-sdk/react";
import InputBox from "@/components/input-box";

export default function Home() {
  const { messages, input, handleSubmit, setInput } = useChat();

  return (
    <div>
      <ol className="mt-3 pt-3 overflow-auto h-[73vh]">
        {messages.map((message, index) => (
          <div key={index}>
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text": {
                  switch (message.role) {
                    case "user":
                      return <HumanMessage HumanMessage={part.text} />;
                    case "assistant":
                      return <AiMessage AiMessage={part.text} />;
                  }
                }
              }
            })}
          </div>
        ))}
      </ol>
      <InputBox input={input} handleClick={handleSubmit} setInput={setInput} />
    </div>
  );
}
