import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BsSendFill } from "react-icons/bs";

type InputProps = {
  input: string;
  setInput: (value: React.SetStateAction<string>) => void;
  handleClick: () => void;
};

export default function InputBox({ input, setInput, handleClick }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="absolute bottom-6 p-6 flex gap-2 items-center justify-between w-screen ">
      <Input
        className="p-3 h-15 !text-lg"
        value={input}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>
        <p>Send</p>
        <BsSendFill />
      </Button>
    </div>
  );
}
