import { useEffect, useState, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, ArrowRight, Sparkles } from "lucide-react";
import { GlitchText } from "../animations/GlitchText";
import { MagneticButton } from "../animations/MagneticButton";
import { FloatingParticles } from "../animations/FloatingParticles";

interface HeroSectionProps {
  onScrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  whoWeAreRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ onScrollToSection, whoWeAreRef, contactRef, containerRef }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoaded(true), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Enhanced Animated Background Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: backgroundY }}
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.3) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 50%, rgba(56,189,248,0.3) 0%, transparent 70%)",
              "radial-gradient(circle at 50% 20%, rgba(236,72,153,0.3) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.3) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        {/* Enhanced Floating Particles */}
        <FloatingParticles count={40} />

        {/* Rotating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              background: `conic-gradient(from ${
                i * 45
              }deg, hsl(var(--brand-500)), hsl(var(--cyan)), hsl(var(--pink)), hsl(var(--brand-500)))`,
              left: `${20 + (i % 3) * 30}%`,
              top: `${10 + (i % 4) * 25}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}

        {/* Main Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="mb-12"
          >
            <motion.span
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-effect neon-border text-brand-400 text-sm font-bold tracking-widest uppercase"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1, type: "spring" }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 30px hsl(var(--brand-500) / 0.8), 0 0 60px hsl(var(--brand-500) / 0.4)",
              }}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-500 to-cyan"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(139,92,246,0.7)",
                    "0 0 0 10px rgba(139,92,246,0)",
                    "0 0 0 0 rgba(139,92,246,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Digital Transformation Pioneers
              <Sparkles className="w-4 h-4" />
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-8xl md:text-9xl font-black mb-12 leading-none tracking-tight"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.6 }}
          >
            <motion.div
              initial={{ y: 200, rotateX: -90, scale: 0.5 }}
              animate={{ y: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            >
              <GlitchText
                className="gradient-text block pulsing-glow"
                rainbow={true}
              >
                ALFASTACK
              </GlitchText>
            </motion.div>
          </motion.h1>

          <motion.div
            className="relative max-w-5xl mx-auto mb-16"
            initial={{ opacity: 0, y: 80 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.p
              className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light"
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              We architect the convergence of imagination and technology,
              crafting digital experiences that transcend reality and redefine
              the boundaries of possibility.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-10 justify-center items-center"
            initial={{ opacity: 0, y: 80 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <MagneticButton
              onClick={() => onScrollToSection(whoWeAreRef)}
              variant="rainbow"
              className="group px-12 py-6 bg-gradient-to-r from-brand-500 via-cyan to-brand-600 text-white rounded-full font-black text-xl uppercase tracking-widest transition-all duration-300 neon-glow relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <span className="relative z-10 flex items-center gap-4">
                <Star className="w-6 h-6" />
                Explore Universe
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => onScrollToSection(contactRef)}
              className="px-12 py-6 border-3 border-brand-500 text-brand-400 rounded-full font-black text-xl uppercase tracking-widest hover:bg-brand-500/20 transition-all duration-300 glass-effect neon-border"
            >
              <span className="flex items-center gap-4">
                <Sparkles className="w-6 h-6" />
                Start Evolution
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => onScrollToSection(whoWeAreRef)}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-4 text-brand-400"
          >
            <span className="text-sm uppercase tracking-[0.3em] font-bold">
              Scroll
            </span>
            <motion.div
              className="p-3 rounded-full glass-effect neon-border"
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";
