"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ChatbotPage() {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([
    {role: "bot", content: "👋 Hello! I'm QuantBot, your quantum computing assistant. How can I help you today?"},
    {role: "bot", content: "You can ask me questions about quantum computing, our club events, or how to get involved!"}
  ]);

  // Reset sidebar visibility when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setShowSidebar(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, {role: "user", content: message}]);
    setMessage("");
    setIsTyping(true);
    
    // Simulate bot response with typing indicator
    setTimeout(() => {
      let response = "I'm still learning about quantum computing. Can you ask something else?";
      
      // Simple response logic
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes("quantum")) {
        response = "Quantum computing harnesses quantum mechanics to perform computations that classical computers cannot efficiently do.";
      } else if (lowerMsg.includes("club") || lowerMsg.includes("symbiosis")) {
        response = "Symbiosis Quantum Club was founded in 2023 to explore quantum computing and related technologies.";
      } else if (lowerMsg.includes("join") || lowerMsg.includes("member")) {
        response = "To join, attend our next intro session or email quantum@symbiosis.edu. No prior quantum knowledge needed!";
      } else if (lowerMsg.includes("event") || lowerMsg.includes("workshop")) {
        response = "Our next event is a Qiskit workshop on quantum algorithms, May 15, 2025.";
      }
      
      setChatHistory(prev => [...prev, {role: "bot", content: response}]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    document.querySelector('input')?.focus();
  };

  const quickSuggestions = [
    "What is quantum computing?", 
    "How can I join?", 
    "Next events?"
  ];

  const allSuggestions = [
    ...quickSuggestions,
    "What is quantum entanglement?",
    "What is quantum supremacy?",
    "How do quantum algorithms work?"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-3 sm:py-6 lg:py-8 px-2 sm:px-4 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 flex-1">
        {/* Mobile Header with Toggle */}
        <div className="flex justify-between items-center lg:hidden mb-2">
          <Link href="/" className="text-blue-400 flex items-center text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back
          </Link>
          <h1 className="font-title text-xl font-bold">QuantBot</h1>
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-1.5 h-8 w-8"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
            <span className="sr-only">Info</span>
          </Button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {showSidebar && (
          <div className="fixed inset-0 bg-black/70 z-40 lg:hidden" onClick={() => setShowSidebar(false)} />
        )}
        
        {/* Sidebar */}
        <div 
          className={`${
            showSidebar 
              ? "fixed right-0 top-0 bottom-0 w-[280px] z-50 p-4 overflow-y-auto bg-[#060a20] border-l border-gray-800" 
              : "hidden"
          } lg:static lg:block lg:w-1/3 lg:z-auto`}
        >
          <div className="lg:sticky lg:top-20">
            {/* Mobile Close Button */}
            {showSidebar && (
              <Button 
                variant="ghost" 
                size="sm"
                className="mb-4 p-1.5 h-8 w-8 lg:hidden absolute right-4 top-4"
                onClick={() => setShowSidebar(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </Button>
            )}

            <div className="hidden lg:flex items-center mb-4 lg:mb-6">
              <Link href="/" className="font-display text-blue-400 hover:text-blue-300 flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Back to Home
              </Link>
            </div>

            <h1 className="font-title text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 hidden lg:block">Quantum Chatbot</h1>
            
            <div className="mb-4 sm:mb-6 hidden lg:block">
              <p className="font-display text-gray-300 mb-3 text-sm sm:text-base">
                Chat with our AI assistant about quantum computing, our club, or upcoming events.
              </p>
              <div className="h-1 w-16 bg-blue-600"></div>
            </div>
            
            <div className="bg-[#060a20]/50 border border-gray-800 rounded-lg p-4 mb-4 sm:p-5 sm:mb-6">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 bg-blue-900/80 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-bold font-title text-white">QB</span>
                </div>
                <div>
                  <h3 className="font-title text-white">QuantBot</h3>
                  <p className="text-xs font-display text-blue-400">Quantum Computing Assistant</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-display text-gray-400">
                I can answer questions about quantum computing principles, our club activities,
                and help you understand complex quantum concepts.
              </p>
            </div>
            
            <div className="bg-[#060a20]/50 border border-gray-800 rounded-lg p-4 sm:p-5">
              <h3 className="font-title text-lg mb-3 text-white">Popular Questions</h3>
              <div className="grid gap-2">
                {allSuggestions.map((suggestion, i) => (
                  <button 
                    key={i}
                    className="w-full text-left px-3 py-2.5 text-sm font-display text-gray-300 hover:text-white hover:bg-blue-900/20 rounded-md transition-colors"
                    onClick={() => {
                      handleSuggestionClick(suggestion);
                      setShowSidebar(false);
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className="lg:w-2/3 flex flex-col h-full">
          <Card className="bg-[#060a20] border-gray-800 flex-1 flex flex-col">
            {/* Desktop Header Only */}
            <div className="hidden lg:flex items-center p-3 border-b border-gray-800 bg-gradient-to-r from-blue-900/20 to-transparent">
              <div className="h-8 w-8 bg-blue-900/80 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold font-title text-white">QB</span>
              </div>
              <div className="flex-1">
                <h3 className="font-title text-white">Active Conversation</h3>
                <p className="text-xs font-display text-blue-400">
                  {isTyping ? "Typing..." : "Online"}
                </p>
              </div>
              <button 
                onClick={() => setChatHistory([
                  {role: "bot", content: "👋 Hello! I'm QuantBot. How can I help you today?"},
                  {role: "bot", content: "You can ask me questions about quantum computing, our club events, or how to get involved!"}
                ])}
                className="text-gray-400 hover:text-white p-2 rounded-full"
                aria-label="Reset conversation"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 2v6h6"></path>
                  <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
                  <path d="M21 22v-6h-6"></path>
                  <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
                </svg>
              </button>
            </div>
            
            {/* Mobile Reset Button */}
            <div className="flex lg:hidden justify-end p-1">
              <button 
                onClick={() => setChatHistory([
                  {role: "bot", content: "👋 Hello! I'm QuantBot. How can I help you today?"},
                  {role: "bot", content: "You can ask me questions about quantum computing, our club events, or how to get involved!"}
                ])}
                className="text-gray-400 p-1.5"
                aria-label="Reset conversation"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 2v6h6"></path>
                  <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
                  <path d="M21 22v-6h-6"></path>
                  <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 lg:p-6 bg-gradient-to-b from-[#060a20] to-[#0a0f2a] space-y-3">
              {chatHistory.map((msg, i) => (
                <div 
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="h-5 w-5 lg:h-6 lg:w-6 bg-blue-900/80 rounded-full flex-shrink-0 flex items-center justify-center mr-1.5 lg:mr-2 mt-1">
                      <span className="text-[8px] lg:text-[10px] font-bold font-title text-white">QB</span>
                    </div>
                  )}
                  <div className={`max-w-[90%] sm:max-w-[75%] rounded-2xl px-2.5 sm:px-4 py-1.5 sm:py-2.5 ${
                    msg.role === "user" 
                      ? "bg-blue-800/80 text-white" 
                      : "bg-gray-800/80 text-gray-100"
                  }`}>
                    <p className="font-display text-xs sm:text-sm">{msg.content}</p>
                  </div>
                  {msg.role === "user" && (
                    <div className="h-5 w-5 lg:h-6 lg:w-6 bg-gray-700/80 rounded-full flex-shrink-0 flex items-center justify-center ml-1.5 lg:ml-2 mt-1">
                      <span className="text-[8px] lg:text-[10px] font-bold font-title text-white">Y</span>
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="h-5 w-5 lg:h-6 lg:w-6 bg-blue-900/80 rounded-full flex-shrink-0 flex items-center justify-center mr-1.5 lg:mr-2 mt-1">
                    <span className="text-[8px] lg:text-[10px] font-bold font-title text-white">QB</span>
                  </div>
                  <div className="bg-gray-800/80 rounded-2xl px-2.5 sm:px-3 py-1.5 sm:py-2">
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-500 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Mobile Quick Suggestions */}
            <div className="flex gap-2 px-2 py-2 overflow-x-auto lg:hidden">
              {quickSuggestions.map((suggestion, i) => (
                <button
                  key={i}
                  className="px-3 py-1.5 text-xs whitespace-nowrap bg-gray-800/60 text-gray-300 rounded-full hover:bg-gray-700/70"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
            
            <div className="p-2 sm:p-4 border-y border-gray-800">
              <form 
                className="flex items-center gap-2" 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask question..."
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-md px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-white font-display focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-gray-500"
                  disabled={isTyping}
                />
                <Button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-display whitespace-nowrap h-auto py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm"
                  disabled={isTyping || !message.trim()}
                >
                  Send
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}