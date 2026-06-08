import React from 'react';

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle Base */}
      <path 
        d="M 25 85 L 75 85 L 50 55 Z" 
        stroke="#0033A0" 
        strokeWidth="10" 
        strokeLinejoin="round" 
        fill="none"
      />
      
      {/* Swooping arm */}
      <path 
        d="M 50 55 C 30 35, 40 20, 50 15 C 60 30, 60 45, 50 55 Z" 
        fill="#0033A0" 
      />
      
      {/* Head dot */}
      <circle cx="65" cy="45" r="8" fill="#0033A0" />
      
      {/* Orange Star */}
      <path 
        d="M 50 2 L 53 10 L 61 10 L 54 14 L 57 21 L 50 17 L 43 21 L 46 14 L 39 10 L 47 10 Z" 
        fill="#F26B21" 
      />
    </svg>
  );
}
