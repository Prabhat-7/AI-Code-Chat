import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BsSendFill } from "react-icons/bs";
import { StopCircle, StopCircleIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";

type InputProps = {
  input: string;
  stop: () => void;
  handleClick: () => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  status: "submitted" | "streaming" | "ready" | "error";
};

export default function InputBox({
  input,
  handleClick,
  handleInputChange,
  status,
  stop,
}: InputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key == "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleClick();
    }
  };
  return (
    <div className="absolute bottom-2 px-6 py-1 flex gap-2 items-center justify-between w-screen ">
      <div className="relative not-last:flex w-full items-center justify-between pr-2">
        <Textarea
          onKeyDown={(e) => handleKeyDown(e)}
          className="p-3 h-15 !text-lg bg-background border-none resize-none"
          value={input}
          onChange={handleInputChange}
          placeholder="How can I help you?"
          rows={1}
        />
        {status == "streaming" && (
          <Button
            className="absolute size-11 right-4 cursor-pointer p-0"
            variant={"ghost"}
            onClick={stop}
          >
            <StopCircle className="!w-full !h-full " />
          </Button>
        )}
      </div>

      <Button onClick={handleClick}>
        <p>Send</p>
        <BsSendFill />
      </Button>
    </div>
  );
}
