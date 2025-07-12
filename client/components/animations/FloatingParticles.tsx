import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
}

export const FloatingParticles = ({ count = 30 }: FloatingParticlesProps) => {
  const colors = [
    "hsl(var(--brand-500))",
    "hsl(var(--cyan))",
    "hsl(var(--pink))",
    "hsl(var(--orange))",
    "hsl(var(--green))",
  ];

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-70"
          style={{
            backgroundColor: colors[i % colors.length],
            filter: `hue-rotate(${Math.random() * 360}deg)`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [null, -150],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};
