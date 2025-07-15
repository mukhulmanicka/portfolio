"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 hero-3d">
        {/* Mobile View */}
        <div className="block sm:hidden">
          <div className="floating-cube absolute top-40 left-8 w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-80" style={{ animationDelay: "1s" }}></div>
          <div className="floating-cube absolute top-60 right-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 transform rotate-12 opacity-70" style={{ animationDelay: "2s" }}></div>
          <div className="floating-cube absolute bottom-80 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 transform -rotate-12 opacity-60" style={{ animationDelay: "3s" }}></div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="absolute inset-0 hero-3d">
            <div className="floating-cube absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-80"
              style={{ animationDelay: "1s" }}></div>
            <div
              className="floating-cube absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 transform rotate-12 opacity-70"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="floating-cube absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 transform -rotate-12 opacity-60"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <Image
            src="/pfp.png"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full mx-auto mb-6 border-4 border-cyan-400/20"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="gradient-text">MUKHUL MANICKA</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          SOFTWARE DEVELOPER
        </p>

        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-8">STRENGTHS</p>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            <div className="text-sm font-medium">AWS</div>
            <div className="text-sm font-medium">JAVA</div>
            <div className="text-sm font-medium">PYTHON</div>
            <div className="text-sm font-medium">BASKETBALL</div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
