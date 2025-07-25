"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Camera, Music, Code, Gamepad2, Book, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const hobbies = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Basketball",
    description: "Playing basketball and staying active on and off the court.",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Music",
    description: "Playing guitar and exploring different genres to unwind and get inspired.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Open Source",
    description: "Contributing to open source projects and building side projects.",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Capturing moments and exploring creative perspectives through the lens.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Gaming",
    description: "Exploring virtual worlds and enjoying competitive gaming sessions.",
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: "Reading",
    description: "Diving into tech articles, sci-fi novels, and personal improvement books.",
  },
]

export default function HobbiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hobbies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hobbies.length) % hobbies.length)
  }

  return (
    <section id="hobbies" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">02.</span> My Passions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond coding, I'm passionate about various creative pursuits that keep me inspired and balanced.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <div className="flex items-center justify-center">
              <Button variant="ghost" size="icon" onClick={prevSlide} className="mr-4">
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Card className="w-full max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">{hobbies[currentIndex].icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{hobbies[currentIndex].title}</h3>
                  <p className="text-muted-foreground">{hobbies[currentIndex].description}</p>
                </CardContent>
              </Card>

              <Button variant="ghost" size="icon" onClick={nextSlide} className="ml-4">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {hobbies.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-400" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
