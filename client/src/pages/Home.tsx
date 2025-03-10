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
    <div className="min-h-screen flex flex-col bg-[#09090b]">
      {/* Hero Section */}
      <div className="flex-1">
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Hacktivist Labs
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-4 sm:mb-8 px-4">
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="relative bg-white text-black hover:bg-white/90 border border-white/20">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#09090b] border border-white/20 w-[calc(100%-2rem)] sm:w-full mx-4 sm:mx-0">
                  <div className="flex flex-col gap-2">
                    <DialogHeader>
                      <DialogTitle className="text-white text-xl sm:text-2xl">Send us a message</DialogTitle>
                      <DialogDescription className="text-gray-400 text-sm sm:text-base">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  <form className="space-y-4 mt-2">
                    <div className="space-y-2">
                      <Input 
                        placeholder="Name"
                        className="bg-transparent text-white placeholder:text-white/70 border-white/20 focus:border-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input 
                        type="email"
                        placeholder="Email"
                        className="bg-transparent text-white placeholder:text-white/70 border-white/20 focus:border-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea 
                        placeholder="Message"
                        className="min-h-[120px] bg-transparent text-white placeholder:text-white/70 border-white/20 focus:border-white"
                      />
                    </div>
                    <Button type="button" className="w-full bg-white text-black hover:bg-white/90">
                      Send Message
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>

      {/* Footer */}
      <footer className="py-4 sm:py-6 bg-[#09090b]">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-2">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm sm:text-base text-gray-400">contact@hacktivistlabs.com</span>
          </div>
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 Hacktivist Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}