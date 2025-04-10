"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Sprout, Leaf, Sun, Cloud, TreePine, Plane } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-emerald-100 to-green-50">
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-300/40 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-300/40 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400/40 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
      </div>

      <div className="flex-1 container mx-auto flex flex-col items-center justify-center gap-16 px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-3xl gap-8">
          <div className="flex items-center justify-center gap-3 p-2 bg-green-50/50 rounded-full backdrop-blur-sm">
            <Plane className="w-6 h-6 text-green-600" />
            <TreePine className="w-5 h-5 text-green-500" />
            <Sprout className="w-6 h-6 text-green-600" />
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Welcome to FarmLife
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Your complete farming companion - empowering farmers with smart
            technology for sustainable and profitable agriculture.
          </p>

          <Link href="/farmer-portal" className="w-fit">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enter Farmer Portal
              <Leaf className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[
            {
              icon: <Sun className="w-12 h-12 text-amber-500" />,
              title: "Smart Farming",
              description:
                "Get real-time weather updates and AI-powered crop recommendations based on your location",
            },
            {
              icon: <Cloud className="w-12 h-12 text-blue-500" />,
              title: "Resource Management",
              description:
                "Manage your inventory, equipment, and schedule farming activities efficiently",
            },
            {
              icon: <Sprout className="w-12 h-12 text-green-500" />,
              title: "Market Access",
              description:
                "Connect with buyers and sellers, access loan schemes, and rent equipment",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="group overflow-hidden border border-green-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/50"
            >
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="w-full border-t border-green-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sprout className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">FarmLife</span>
          </div>
          <span className="text-sm text-green-700">
            © 2025 FarmLife. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
