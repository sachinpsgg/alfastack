import { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { GlitchText } from "../animations/GlitchText";
import { ParallaxText } from "../animations/ParallaxText";

export const WhoWeAreSection = forwardRef<HTMLElement>((_, ref) => {
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-30%",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);

  return (
    <section
      ref={sectionRef}
      className="py-40 px-4 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(139,92,246,0.05) 0%, transparent 70%)",
      }}
    >
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            "conic-gradient(from 0deg, hsl(var(--brand-500)), hsl(var(--cyan)), hsl(var(--pink)), hsl(var(--brand-500)))",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-40 left-10 w-64 h-64 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cyan) / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.h2
                className="text-7xl md:text-8xl font-black mb-16 leading-tight"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <ParallaxText speed={0.3}>
                  <GlitchText className="gradient-text pulsing-glow" rainbow>
                    WHO WE ARE
                  </GlitchText>
                </ParallaxText>
              </motion.h2>

              <div className="space-y-10 text-xl text-muted-foreground leading-relaxed">
                {[
                  "AlfaStack pioneers the convergence of quantum technology and limitless imagination, forging digital experiences that shatter conventional paradigms.",
                  "Our collective of visionaries, architects, and digital alchemists collaborates to construct realities that transcend expectations—they reshape universes.",
                  "We exist at the nexus of art and science, where revolutionary technology meets soul-stirring human connection.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.3 }}
                    className="relative pl-8 group"
                  >
                    <motion.span
                      className="absolute left-0 top-3 w-4 h-4 rounded-full"
                      style={{
                        background: `hsl(var(--${
                          ["brand-500", "cyan", "pink"][index]
                        }))`,
                      }}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.3, type: "spring" }}
                      whileHover={{ scale: 1.5, rotate: 180 }}
                    />
                    <motion.span
                      className="group-hover:text-brand-300 transition-colors duration-300"
                      animate={{
                        background: [
                          "transparent",
                          "rgba(139,92,246,0.1)",
                          "transparent",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {text}
                    </motion.span>
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="grid grid-cols-2 gap-8 mt-16"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
              >
                {[
                  {
                    number: "500+",
                    label: "Projects Launched",
                    color: "brand-500",
                  },
                  { number: "∞%", label: "Innovation Rate", color: "cyan" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 rounded-3xl glass-effect interactive-card neon-border"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(139, 92, 246, 0.15)",
                    }}
                    style={{
                      boxShadow: `0 20px 40px hsl(var(--${stat.color}) / 0.3)`,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.div
                      className="text-5xl font-black mb-3"
                      style={{ color: `hsl(var(--${stat.color}))` }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        delay: 1.7 + index * 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="relative" style={{ y: imageY }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotateY: -45 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
              className="relative"
            >
              {/* Enhanced glowing orb effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--brand-500) / 0.4), hsl(var(--cyan) / 0.4), hsl(var(--pink) / 0.4), hsl(var(--brand-500) / 0.4))",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="glass-effect rounded-3xl p-16 relative overflow-hidden neon-border">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(56,189,248,0.05) 100%)",
                      "linear-gradient(135deg, rgba(56,189,248,0.1) 0%, rgba(236,72,153,0.05) 100%)",
                      "linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(139,92,246,0.05) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="text-4xl font-black mb-10 text-brand-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Our Quantum Mission
                  </motion.h3>

                  <motion.p
                    className="text-xl text-muted-foreground leading-relaxed mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    To architect the metamorphosis of digital consciousness by
                    engineering seamless, omnipotent, and infinitely scalable
                    solutions that catalyze exponential evolution and
                    technological transcendence.
                  </motion.p>

                  <motion.div
                    className="grid grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.4 }}
                  >
                    {[
                      {
                        value: "24/7",
                        label: "Quantum Support",
                        color: "pink",
                      },
                      { value: "∞", label: "Innovation Cycle", color: "cyan" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-6 rounded-2xl glass-effect neon-border"
                        whileHover={{
                          scale: 1.1,
                        }}
                        style={{
                          backgroundColor: `hsl(var(--${item.color}) / 0.1)`,
                          borderColor: `hsl(var(--${item.color}))`,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <motion.div
                          className="text-4xl font-black mb-3"
                          style={{ color: `hsl(var(--${item.color}))` }}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.7,
                          }}
                        >
                          {item.value}
                        </motion.div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

WhoWeAreSection.displayName = "WhoWeAreSection";
