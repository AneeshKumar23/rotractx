"use client";

import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./dialog";

export function Navbar() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <nav className="w-full border-b border-white/10 bg-black/30 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              FarmLife
            </span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-white/90"
                  onClick={() => setIsSignUp(false)}
                >
                  Login
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-2 rounded-full"
                  data-dialog-trigger="signup"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#0e0e0e] border border-white/10">
                <DialogHeader>
                  <DialogTitle className="text-center text-white">
                    {isSignUp ? "Sign Up for FarmLife" : "Login to FarmLife"}
                  </DialogTitle>
                  <DialogDescription className="text-center text-sm text-white/70">
                    {isSignUp
                      ? "Create an account to access your personalized farming dashboard."
                      : "Login to your FarmLife account to continue."}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {isSignUp && (
                    <div className="grid gap-2">
                      <label className="text-sm text-white/80">Full Name</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-md bg-black/30 border border-white/20 text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  )}
                  <div className="grid gap-2">
                    <label className="text-sm text-white/80">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 rounded-md bg-black/30 border border-white/20 text-white"
                      placeholder="hi@yourcompany.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm text-white/80">Password</label>
                    <input
                      type="password"
                      className="w-full p-2 rounded-md bg-black/30 border border-white/20 text-white"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <DialogFooter className="flex flex-col gap-6">
                  <Button
                    type="submit"
                    className={`w-full ${
                      isSignUp
                        ? "bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500"
                        : "bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500"
                    } text-white font-medium`}
                  >
                    {isSignUp ? "Sign Up" : "Login"}
                  </Button>
                  <div className="relative w-full my-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-[#0e0e0e] px-4 text-white/70">
                        Or
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-100 border border-gray-300 py-3 text-sm font-medium">
                    Continue with Google
                  </Button>
                </DialogFooter>
                <p className="text-xs text-center text-white/50 mt-4">
                  {isSignUp ? (
                    <>
                      Already have an account?{" "}
                      <button
                        onClick={() => setIsSignUp(false)}
                        className="text-emerald-400 underline"
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      Don't have an account?{" "}
                      <button
                        onClick={() => setIsSignUp(true)}
                        className="text-emerald-400 underline"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
}
