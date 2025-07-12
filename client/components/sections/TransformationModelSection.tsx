import { forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Code, Cloud, Zap } from "lucide-react";
import { GlitchText } from "../animations/GlitchText";

const steps = [
  {
    number: "01",
    title: "DISCOVERY",
    subtitle: "Quantum Analysis",
    description:
      "We penetrate the depths of your digital multiverse, dissecting current architectures and unveiling transformation vectors.",
    icon: <Database className="w-12 h-12" />,
    color: "brand-500",
    accent: "cyan",
  },
  {
    number: "02",
    title: "STRATEGY",
    subtitle: "Master Architecture",
    description:
      "We engineer comprehensive blueprints with quantum milestones and success trajectories spanning infinite dimensions.",
    icon: <Code className="w-12 h-12" />,
    color: "cyan",
    accent: "pink",
  },
  {
    number: "03",
    title: "EXECUTION",
    subtitle: "Reality Construction",
    description:
      "Our collective consciousness materializes cutting-edge solutions using next-generation quantum technologies.",
    icon: <Cloud className="w-12 h-12" />,
    color: "pink",
    accent: "orange",
  },
  {
    number: "04",
    title: "EVOLUTION",
    subtitle: "Infinite Optimization",
    description:
      "We continuously monitor, evolve, and transcend your solutions for peak performance across all realities.",
    icon: <Zap className="w-12 h-12" />,
    color: "orange",
    accent: "green",
  },
];

export const TransformationModelSection = forwardRef<HTMLElement>((_, ref) => {
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-20%",
  });

  return (
    <section ref={ref} className="py-48 px-4 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            conic-gradient(from 0deg at 25% 25%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
            conic-gradient(from 90deg at 75% 75%, rgba(56, 189, 248, 0.4) 0%, transparent 50%),
            conic-gradient(from 180deg at 75% 25%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
            conic-gradient(from 270deg at 25% 75%, rgba(251, 146, 60, 0.4) 0%, transparent 50%)
          `,
          backgroundSize: "400px 400px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 120 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-black mb-12 leading-tight"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
          >
            <GlitchText className="gradient-text pulsing-glow" rainbow>
              TRANSFORMATION
            </GlitchText>
            <br />
            <motion.span
              className="text-5xl md:text-7xl text-foreground/60 font-light tracking-[0.3em]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(139,92,246,0.5)",
                  "0 0 40px rgba(56,189,248,0.5)",
                  "0 0 20px rgba(236,72,153,0.5)",
                  "0 0 40px rgba(139,92,246,0.5)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              PROTOCOL
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-2xl text-muted-foreground max-w-5xl mx-auto font-light"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A revolutionary metamorphosis framework that has generated
            exponential paradigm shifts across multidimensional industries, from
            quantum startups to galactic enterprises.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 200, rotateX: -60 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 1.5,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="relative group"
            >
              <motion.div
                className="glass-effect rounded-3xl p-10 h-full transition-all duration-700 border-2 border-transparent neon-border"
                whileHover={{
                  scale: 1.08,
                  y: -25,
                }}
                style={{
                  backgroundColor: `hsl(var(--${step.color}) / 0.15)`,
                  borderColor: `hsl(var(--${step.color}))`,
                  boxShadow: `0 25px 50px hsl(var(--${step.color}) / 0.4)`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Enhanced background glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                  style={{
                    background: `conic-gradient(from 0deg, hsl(var(--${step.color}) / 0.4), hsl(var(--${step.accent}) / 0.4), hsl(var(--${step.color}) / 0.4))`,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <motion.span
                      className="text-8xl font-black opacity-40"
                      style={{ color: `hsl(var(--${step.color}))` }}
                      initial={{ scale: 0, rotate: -270 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        type: "spring",
                        delay: index * 0.3 + 0.7,
                        stiffness: 200,
                      }}
                    >
                      {step.number}
                    </motion.span>
                    <motion.div
                      className="w-20 h-20 rounded-3xl p-4 text-white shadow-2xl neon-glow"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(--${step.color})), hsl(var(--${step.accent})))`,
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                      }}
                      transition={{
                        scale: { type: "spring", stiffness: 400, damping: 10 },
                        rotate: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                      animate={{
                        boxShadow: [
                          `0 10px 30px hsl(var(--brand-500) / 0.3)`,
                          `0 15px 40px hsl(var(--cyan) / 0.4)`,
                        ],
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: index * 0.3 + 1 }}
                  >
                    <h3
                      className="text-3xl font-black mb-3 tracking-wider"
                      style={{ color: `hsl(var(--${step.color}))` }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm mb-6 uppercase tracking-[0.3em] font-bold"
                      style={{ color: `hsl(var(--${step.accent}))` }}
                    >
                      {step.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Connection Lines */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-5 w-10 h-1 z-20"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.3 + 2 }}
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--${step.color})), hsl(var(--${step.accent})))`,
                    boxShadow: `0 0 10px hsl(var(--${step.color}) / 0.6)`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TransformationModelSection.displayName = "TransformationModelSection";
