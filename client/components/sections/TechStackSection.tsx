import { forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Cloud, Shield } from "lucide-react";
import { GlitchText } from "../animations/GlitchText";

const technologies = [
  {
    category: "FRONTEND",
    subtitle: "User Reality",
    icon: <Code className="w-16 h-16" />,
    techs: ["React", "TypeScript", "Next.js", "TailwindCSS", "Three.js"],
    color: "brand-500",
    accent: "cyan",
  },
  {
    category: "BACKEND",
    subtitle: "Core Matrix",
    icon: <Database className="w-16 h-16" />,
    techs: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"],
    color: "cyan",
    accent: "pink",
  },
  {
    category: "CLOUD",
    subtitle: "Infinite Infrastructure",
    icon: <Cloud className="w-16 h-16" />,
    techs: ["AWS", "Docker", "Kubernetes", "Terraform", "Serverless"],
    color: "pink",
    accent: "orange",
  },
  {
    category: "SECURITY",
    subtitle: "Quantum Shield",
    icon: <Shield className="w-16 h-16" />,
    techs: ["Zero Trust", "Encryption", "OAuth", "Monitoring", "Compliance"],
    color: "orange",
    accent: "green",
  },
];

export const TechStackSection = forwardRef<HTMLElement>((_, ref) => {
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-20%",
  });

  return (
    <section ref={ref} className="py-48 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 120 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-black mb-12 leading-tight"
            initial={{ opacity: 0, rotateY: -120 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <GlitchText className="gradient-text pulsing-glow" rainbow>
              QUANTUM ARSENAL
            </GlitchText>
          </motion.h2>
          <motion.p
            className="text-2xl text-muted-foreground max-w-5xl mx-auto font-light"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We harness omnipotent technologies and quantum best practices to
            forge indestructible, infinitely scalable, and future-transcendent
            digital weapons of mass creation.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 150, rotateY: -60 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="group cursor-pointer"
            >
              <motion.div
                className="glass-effect rounded-3xl p-10 h-full transition-all duration-700 border-2 border-transparent neon-border"
                whileHover={{
                  scale: 1.08,
                  y: -20,
                  rotateY: 15,
                }}
                style={{
                  backgroundColor: `hsl(var(--${tech.color}) / 0.15)`,
                  borderColor: `hsl(var(--${tech.color}))`,
                  boxShadow: `0 25px 50px hsl(var(--${tech.color}) / 0.4)`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="w-28 h-28 rounded-3xl p-6 mb-12 text-white shadow-2xl mx-auto neon-glow"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${tech.color})), hsl(var(--${tech.accent})))`,
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
                  animate={{
                    rotateY: [0, 5, -5, 0],
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 400, damping: 10 },
                    rotateY: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {tech.icon}
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 + 0.7 }}
                >
                  <h3
                    className="text-3xl font-black mb-3 tracking-wider"
                    style={{ color: `hsl(var(--${tech.color}))` }}
                  >
                    {tech.category}
                  </h3>
                  <p
                    className="text-sm mb-8 uppercase tracking-[0.3em] font-bold"
                    style={{ color: `hsl(var(--${tech.accent}))` }}
                  >
                    {tech.subtitle}
                  </p>

                  <div className="space-y-4">
                    {tech.techs.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.2 + i * 0.15 + 0.9,
                        }}
                        className="flex items-center justify-center gap-4 text-muted-foreground group-hover:text-brand-300 transition-colors"
                      >
                        <motion.div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--${tech.color}))`,
                          }}
                          whileHover={{ scale: 2.5 }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                            boxShadow: [
                              `0 0 0 0 hsl(var(--${tech.color}) / 0.7)`,
                              `0 0 0 8px hsl(var(--${tech.color}) / 0)`,
                              `0 0 0 0 hsl(var(--${tech.color}) / 0)`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                        <span className="font-bold text-lg">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TechStackSection.displayName = "TechStackSection";
