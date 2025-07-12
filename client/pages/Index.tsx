import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "../components/sections/HeroSection";
import { WhoWeAreSection } from "../components/sections/WhoWeAreSection";
import { TransformationModelSection } from "../components/sections/TransformationModelSection";
import { TechStackSection } from "../components/sections/TechStackSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const whoWeAreRef = useRef<HTMLElement>(null);
  const transformationRef = useRef<HTMLElement>(null);
  const techStackRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-x-hidden relative"
    >
      {/* Enhanced cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(168,85,247,0.4) 50%, transparent 100%)",
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Hero Section */}
      <HeroSection
        ref={heroRef}
        onScrollToSection={scrollToSection}
        whoWeAreRef={whoWeAreRef}
        contactRef={contactRef}
        containerRef={containerRef}
      />

      {/* Who We Are Section */}
      <WhoWeAreSection ref={whoWeAreRef} />

      {/* Transformation Model Section */}
      <TransformationModelSection ref={transformationRef} />

      {/* Tech Stack Section */}
      <TechStackSection ref={techStackRef} />

      {/* Contact Section */}
      <ContactSection ref={contactRef} />
    </div>
  );
}
