import { AuroraBackground } from "@/components/AuroraBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { GlowEffect } from "@/components/ui/glow-effect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto px-4 relative flex flex-col gap-4 items-center justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Hacktivist Labs
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-8">
            Transforming ideas into digital reality with cutting-edge solutions
          </p>
          <div className="relative">
            <GlowEffect
              colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
              mode="colorShift"
              blur="soft"
              duration={3}
              scale={0.9}
            />
            <Button size="lg" className="relative bg-white text-black hover:bg-white/90 border border-white/20">
              Get Started
            </Button>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Get in Touch</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-black hover:bg-white/90">
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/95 border border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-white">Send us a message</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div>
                    <Input 
                      placeholder="Name" 
                      className="bg-transparent text-white placeholder:text-white/70 border-white/20 focus:border-white"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-transparent text-white placeholder:text-white/70 border-white/20 focus:border-white"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Message" 
                      className="min-h-[120px] bg-transparent text-white placeholder:text-white/70 border-white/20 focus:border-white"
                    />
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Hacktivist Labs. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400">contact@hacktivistlabs.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}