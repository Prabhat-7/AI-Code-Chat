import React from "react";
import { Card } from "../ui/card";
import { FaUser } from "react-icons/fa";

export default function HumanMessage({
  HumanMessage,
}: {
  HumanMessage: string;
}) {
  return (
    <div className="flex gap-2 pr-2 mr-2 justify-end">
      <Card className="w-max p-3">{HumanMessage}</Card>
      <div className=" w-max h-max bg-card p-2 rounded-full border border-muted-foreground/50">
        <FaUser size={20} />
      </div>
    </div>
  );
}
