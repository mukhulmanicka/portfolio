"use client"

import { useState } from "react"
import { MapPin, ExternalLink, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const timelineData = [
  {
    id: 1,
    company: "Cisco Systems",
    position: "Software Engineer Co-op",
    duration: "Jul 2025 - Present",
    location: "San Jose, CA",
    description: "Contributed to improving testing efficiency and ensuring product reliability in data center and service provider environments.",
    logo: "/cisco_logo.png",
    image: "/cisco.png",
    technologies: ["Python", "Flask", "AWS", "Pyttest"],
    website: "https://cisco.com",
    achievements: [
      "Automated testing workflows for high performance Cisco 8000 Series routers",
      "Developed and executed test cases to validate functionality, performance, and security of routers powered by Cisco Silicon One ASICs.",
      "Collaborated with engineering teams to ensure quality assurance infrastructure supporting up to 260 Tbps bandwidth."
    ]
  },
  {
    id: 2,
    company: "Palantir Technologies",
    position: "Winter Tech Fellowship",
    duration: "Dec 2024 - Jan 2025",
    location: "Remote",
    description: "Participated in a competitive tech fellowship program, focusing on building scalable software solutions using Palantir's technologies.",
    logo: "/palantir_logo.jpg",
    image: "/palantir.jpg",
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
    website: "https://palantir.com",
    achievements: [
      "Developed a predictive inventory management system using Palantir Foundry and Palantir Pipeline in the span of 2 weeks",
      "Designed a real-time analytics dashboards with React and Typescript to monitor supply chain KPIs",
      "Leveraged Palantir AI to build a demand forecasting model powered by LLMs, improving warehouse accuracy by 40%"
    ]
  },
  {
    id: 3,
    company: "UCSC Blueprint",
    position: "Software Developer",
    duration: "Nov 2024 - Jun 2025",
    location: "Santa Cruz, CA",
    description: "Developed both a web application and mobile app for managing volunteers, events, and tracking community engagement.",
    logo: "/ucscblueprint.jpg",
    image: "/ucsc_blueprint.jpg",
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
    website: "https://ucsc.edu",
    achievements: [
      "Collaborated with multiple non-profit organizations in an agile environment to create software applications",
      "Led the creation of both a volunteer mobile app and website using expo, react, and firebase for 100+ users",
      "Improved user engagement and satisfaction through iterative design and user feedback"
    ]
  },
  {
    id: 4,
    company: "University of California, Santa Cruz",
    position: "B.S. Computer Science",
    duration: "Sep 2022 - Dec 2025",
    location: "Santa Cruz, CA",
    description: "Currently a senior at UCSC with coursework in Data Structures and Algorithms, Object Oriented Programming, Operating Systems, Artificial Intelligence, Advanced Computer Networks, and Advanced Programming in C++.",
    logo: "/ucsc_logo.jpg",
    image: "/ucsc.jpg",
    technologies: ["C/C++", "Python", "Linux", "WebGL"],
    website: "https://ucsc.edu",
    achievements: [
      "Part of UCSC Blueprint, Google Developer Student Club, and Slugsecurity",
      "Maintained a 3.9 GPA with a focus on networking, security, and AI",
      "5x Dean's Honors recipient"
    ]
  },
]

export default function TimelineSection() {
  const [selectedItem, setSelectedItem] = useState(timelineData[0])

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">01.</span> My Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background, showcasing the experiences that have shaped my career in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-1">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

              <div className="space-y-4">
                {timelineData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedItem.id === item.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background z-10 hidden sm:block transition-colors duration-300 ${
                      selectedItem.id === item.id ? 'bg-blue-400' : 'bg-muted-foreground'
                    }`}></div>

                    {/* Timeline Item Card */}
                    <Card className={`sm:ml-16 transition-all duration-300 ${
                      selectedItem.id === item.id 
                        ? 'border-blue-400 shadow-lg bg-blue-50/50 dark:bg-blue-900/20' 
                        : 'hover:shadow-md border-border'
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          {/* Company Logo */}
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                              <div className="w-full h-full bg-gray-300 rounded-lg">
                                <Image
                                  src={item.logo}
                                  alt={`${item.company} logo`}
                                  width={40}
                                  height={40}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                        </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm truncate">{item.position}</h3>
                            <p className="text-xs text-muted-foreground truncate">{item.company}</p>
                            <p className="text-xs text-muted-foreground">{item.duration}</p>
                          </div>

                          {/* Arrow */}
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                            selectedItem.id === item.id ? 'rotate-90 text-blue-400' : 'text-muted-foreground'
                          }`} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                        <Image
                            src={selectedItem.logo}
                            alt={`${selectedItem.company} logo`}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedItem.position}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-2 text-blue-400">
                          <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                          <a 
                            href={selectedItem.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-300 transition-colors"
                          >
                            <span className="font-medium">{selectedItem.company}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className= "font-semibold">{selectedItem.duration}</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{selectedItem.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Key Achievements */}
                {selectedItem.achievements && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="">
                      {selectedItem.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <Badge key={index} className="">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Visual Content Area */}
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Image
                        src={selectedItem.image}
                        alt={`${selectedItem.company} screenshot`}
                        width={200}
                        height={200}
                        className="w-auto h-full"
                      />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}