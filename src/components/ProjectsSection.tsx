import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "NES Style Game Emulator",
    description:
      "A retro-style game emulator that allows you to play classic NES games in your browser.",
    image: "/nes.png",
    technologies: ["C++", "SDL2", "Github Actions"],
    githubUrl: "https://github.com/CSE111-Group15/final_project",
    liveUrl: "https://your-ecommerce.vercel.app",
  },
  {
    title: "AWS Serverless Web Application",
    description:
      "A serverless web application built on AWS, utilizing Lambda, API Gateway, and DynamoDB for a scalable architecture.",
    image: "/aws.png",
    technologies: ["AWS Amplify", "GraphQL", "Lambda", "Amazon Bedrock"],
    githubUrl: "https://github.com/mukhulmanicka/taskmanager",
    liveUrl: "https://your-taskmanager.vercel.app",
  },
  {
    title: "Whispr, Secure Messaging",
    description:
      "A secure messaging application that prioritizes user privacy and data protection.",
    image: "/whispr.png",
    technologies: ["Python", "Tkinter", "Cryptography"],
    githubUrl: "https://github.com/mukhulmanicka/whispr",
    liveUrl: "https://whispr.vercel.app",
  },
  /*
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark/light mode toggle.",
    image: "/globe.svg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by OpenAI's GPT, featuring conversation history and customizable AI personalities.",
    image: "/globe.svg",
    technologies: ["React", "OpenAI API", "Firebase", "Material-UI"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://your-ai-chat.vercel.app",
  },
  {
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness tracking app with workout logging, progress visualization, and social sharing features.",
    image: "/globe.svg",
    technologies: ["React Native", "Expo", "Supabase", "Chart.js"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://your-fitness-app.vercel.app",
  },
  */
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">03.</span> Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in frontend development, full-stack applications, and
            creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/globe.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/*
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
              */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
