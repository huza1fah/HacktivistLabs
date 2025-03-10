import { AuroraBackground } from "@/components/AuroraBackground";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/services-card";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Code, Rocket, Terminal, Send, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AuroraBackground>
        <div className="container mx-auto px-4 h-screen flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Hacktivist Labs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transforming ideas into digital reality with cutting-edge solutions
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </AuroraBackground>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Shield className="w-8 h-8" />}
              title="Cybersecurity"
              description="Protect your digital assets with our advanced security solutions"
            />
            <ServiceCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Create stunning, responsive websites that drive results"
            />
            <ServiceCard
              icon={<Rocket className="w-8 h-8" />}
              title="Digital Strategy"
              description="Strategic planning to accelerate your digital transformation"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Terminal className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hacktivist Labs is a forward-thinking digital agency specializing in
              cybersecurity, web development, and digital transformation. We combine
              technical expertise with creative innovation to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Message" className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2024 Hacktivist Labs. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-muted-foreground">contact@hacktivistlabs.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
