import React from "react";
import { Card } from "../ui/card";
import { Brain } from "lucide-react";
import Loading from "../loading-3dots";

export default function AiMessage({
  AiMessage,
  isLoading,
}: {
  AiMessage: string;
  isLoading: boolean;
}) {
  return (
    <div className="flex gap-2 pl-2 my-2 mx-4">
      <div className=" w-max h-max bg-card p-1 rounded-full border border-muted-foreground/50">
        <Brain />
      </div>
      {isLoading ? <Loading /> : <Card className="w-max p-3">{AiMessage}</Card>}
    </div>
  );
}
