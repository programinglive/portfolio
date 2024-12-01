'use client'
import React, {useState, useEffect} from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/16/solid";

export default function DarkButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isDark')) {
      setIsDark(localStorage.getItem('isDark') === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isDark', String(isDark));
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      <button
        className={`dark:bg-[#1A202C] p-1 rounded-full shadow-md focus:outline-none border-2 ${isDark ? 'border-white' : 'border-[#B2B5C9]'}`}
        onClick={toggleDark}
      >
        {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
      </button>
    </div>
  );
}