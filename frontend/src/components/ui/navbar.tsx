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
            <Button
              variant="ghost"
              className="text-white hover:text-emerald-300 transition-colors"
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-emerald-400/90 to-green-400/90 hover:from-emerald-400 hover:to-green-400 text-white/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
