"use client";

import { ReactNode } from "react";

interface GoldButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  testId?: string;
}

export default function GoldButton({ href, children, className = "", testId }: GoldButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-[8px] bg-gold hover:bg-gold-hover text-base transition-colors duration-200 ${className}`}
      style={{ color: "#0C0C0E" }}
      data-testid={testId}
    >
      {children}
    </a>
  );
}
