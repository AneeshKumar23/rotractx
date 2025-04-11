"use client";

import Link from "next/link";
import { Button } from "./button";

export function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black/30 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              FarmLife
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/auth?mode=login">
              <Button
                variant="ghost"
                className="text-white hover:text-white/90"
              >
                Login
              </Button>
            </Link>
            <Link href="/auth?mode=signup">
              <Button
                variant="ghost"
                className="bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-2 rounded-full"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
