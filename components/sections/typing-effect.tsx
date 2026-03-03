"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  speed?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
}

export default function TypingEffect({
  words,
  speed = 100,
  delay = 1000,
  cursor = true,
  className = "",
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting) {
      if (displayedText.length === 0) {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsDeleting(false);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, speed / 2);
      }
    } else {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        setIsWaiting(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isWaiting, wordIndex, words, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
}
