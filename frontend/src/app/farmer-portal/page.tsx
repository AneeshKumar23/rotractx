"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Wheat, Trees, Sprout } from "lucide-react";
import { FocusCards } from "@/components/ui/focus-cards";

const FarmerPortal = () => {
  const features = [
    { img: "loan.png", text: "Loan Schemes", link: "/loan" },
    { img: "calender.png", text: "Crop Planting Calendar", link: "/calendar" },
    { img: "crop.png", text: "Crop Disease ID", link: "/disease" },
    { img: "inventory.png", text: "Inventory Management", link: "/inventory" },
    { img: "weather.png", text: "Live Weather", link: "/weather" },
    { img: "video.png", text: "Tutorial Videos/Podcast", link: "/videos" },
    { img: "market.png", text: "Buy/Sell/Rent", link: "/market" },
    { img: "rent.png", text: "Machine Rent", link: "/machines" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-emerald-100 to-green-50">
      {/* Nature-inspired decorative background */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-300/40 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-300/40 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400/40 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto flex flex-col flex-1 px-6 py-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-6 mb-12">
          <div className="flex items-center justify-center gap-3 p-2 bg-green-50/50 rounded-full backdrop-blur-sm">
            <Wheat className="w-6 h-6 text-amber-600" />
            <Trees className="w-6 h-6 text-green-500" />
            <Plane className="w-6 h-6 text-emerald-600" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Welcome to
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              FarmLife
            </span>
          </h1>
        </div>

        {/* Features Grid */}
        <div className="mb-auto">
          <FocusCards cards={features} />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-green-100 mt-8">
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
};

export default FarmerPortal;
