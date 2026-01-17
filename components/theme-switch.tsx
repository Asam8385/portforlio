"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-slate-800 w-[3rem] h-[3rem] backdrop-blur-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/20 rounded-full flex items-center justify-center hover:scale-110 hover:border-indigo-500/50 active:scale-105 transition-all text-indigo-400 hover:text-indigo-300"
      onClick={toggleTheme}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? <BsSun className="text-lg" /> : <BsMoon className="text-lg" />}
    </button>
  );
}
