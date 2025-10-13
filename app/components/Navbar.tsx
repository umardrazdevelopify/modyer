'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isCommitmentsOpen, setIsCommitmentsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isTryClaudeOpen, setIsTryClaudeOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-[var(--nav-bg)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[var(--nav-text)]">
            ANTHROPIC
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors"
          >
            Research
          </a>
          <a 
            href="#" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors"
          >
            Economic Futures
          </a>
          
          {/* Commitments Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCommitmentsOpen(!isCommitmentsOpen)}
              className="flex items-center text-[var(--nav-text)] hover:text-gray-600 transition-colors"
            >
              Commitments
              <svg 
                className="ml-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCommitmentsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Commitment 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Commitment 2</a>
              </div>
            )}
          </div>

          {/* Learn Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLearnOpen(!isLearnOpen)}
              className="flex items-center text-[var(--nav-text)] hover:text-gray-600 transition-colors"
            >
              Learn
              <svg 
                className="ml-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLearnOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Learn 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Learn 2</a>
              </div>
            )}
          </div>

          <a 
            href="#" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors"
          >
            News
          </a>
        </div>

        {/* Try Claude Button */}
        <div className="relative">
          <button
            onClick={() => setIsTryClaudeOpen(!isTryClaudeOpen)}
            className="bg-[var(--nav-button-bg)] text-[var(--nav-button-text)] px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center"
          >
            Try Claude
            <svg 
              className="ml-1 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isTryClaudeOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[var(--nav-text)]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
