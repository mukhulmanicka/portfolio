import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring large React applications with proper state management and component architecture.",
    image: "/globe.svg",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    url: "https://medium.com/@yourusername/building-scalable-react-applications",
  },
  {
    title: "The Future of Web Development",
    excerpt:
      "Exploring emerging trends in web development including AI integration, WebAssembly, and the evolution of JavaScript frameworks.",
    image: "/globe.svg",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Web Development",
    url: "https://medium.com/@yourusername/future-of-web-development",
  },
  {
    title: "Optimizing Next.js Performance",
    excerpt:
      "A comprehensive guide to improving your Next.js application performance with code splitting, image optimization, and caching strategies.",
    image: "/globe.svg",
    date: "2023-12-22",
    readTime: "10 min read",
    category: "Next.js",
    url: "https://medium.com/@yourusername/optimizing-nextjs-performance",
  },
  /*
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt:
      "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method for optimal results.",
    image: "/globe.svg",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "CSS",
    url: "https://medium.com/@yourusername/css-grid-vs-flexbox",
  },
  {
    title: "TypeScript Best Practices for 2024",
    excerpt:
      "Essential TypeScript patterns and practices that will make your code more maintainable and type-safe in modern applications.",
    image: "/globe.svg",
    date: "2023-12-01",
    readTime: "9 min read",
    category: "TypeScript",
    url: "https://medium.com/@yourusername/typescript-best-practices-2024",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt:
      "A practical guide to implementing accessibility features that make your web applications usable for everyone.",
    image: "/globe.svg",
    date: "2023-11-20",
    readTime: "11 min read",
    category: "Accessibility",
    url: "https://medium.com/@yourusername/building-accessible-web-applications",
  },
  */
]

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">04.</span> Latest Blog Posts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology trends, and programming best
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/globe.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-cyan-500 hover:bg-cyan-600">{post.category}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>

              <CardFooter>
                <Button variant="ghost" className="group/btn p-0 h-auto font-medium" asChild>
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
              View All Posts on Medium
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
