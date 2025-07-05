"use client";
import AiMessage from "@/components/messeges/AiMesage";
import React, { useState } from "react";
import HumanMessage from "@/components/messeges/HumanMessage";
import { useChat } from "@ai-sdk/react";
import InputBox from "@/components/input-box";
import { Brain } from "lucide-react"; // Make sure to import your Brain icon
import Loading from "@/components/loading-3dots";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat();

  return (
    <div>
      <ol className="mt-3 pt-3 overflow-auto h-[73vh]">
        {messages.map((message, index) => (
          <div key={message.id}>
            {message.role === "user" ? (
              <HumanMessage HumanMessage={message.content} />
            ) : (
              <AiMessage AiMessage={message.content} />
            )}
          </div>
        ))}

        {/* Show loading indicator when AI is responding */}
        {status === "submitted" && (
          <div className="flex gap-2 pl-2 my-2 mx-4">
            <div className="w-max h-max bg-card p-1 rounded-full border border-muted-foreground/50">
              <Brain />
            </div>
            {status === "submitted" && <Loading />}
          </div>
        )}
      </ol>

      <InputBox
        stop={stop}
        input={input}
        handleInputChange={handleInputChange}
        handleClick={handleSubmit}
        status={status}
      />
    </div>
  );
}
