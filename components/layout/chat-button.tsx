"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ChatButton() {
  const router = useRouter();
  
  return (
    <Button 
      onClick={() => router.push("/chatbot")}
      className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-blue-900 p-0 shadow-lg hover:bg-blue-800"
      aria-label="Open Quantum Chatbot"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      </svg>
    </Button>
  );
}