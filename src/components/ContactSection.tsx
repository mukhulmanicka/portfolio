import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">05.</span> Connect With Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
            together or just want to say hello!
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Take a look at my resume to see if my skills and experiences align with your company. I'm always
                  looking for new opportunities to grow.
                </p>
                <Button size="lg" className="w-full md:w-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, ideas, or just having a chat about technology and
                  programming.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com/in/mukhulmanicka" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/mukhulmanicka" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:mukhul.manicka@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground">©2024 Mukhul Manicka Sivakumar</p>
        </div>
      </div>
    </section>
  )
}
