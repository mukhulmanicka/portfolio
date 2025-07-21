import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import TimelineSection from "@/components/TimelineSection"
import HobbiesSection from "@/components/HobbiesSection"
import ProjectsSection from "@/components/ProjectsSection"
import BlogsSection from "@/components/BlogsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <HobbiesSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </main>
  )
}
