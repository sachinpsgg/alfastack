import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  children: string;
  className?: string;
  rainbow?: boolean;
}

export const GlitchText = ({
  children,
  className = "",
  rainbow = false,
}: GlitchTextProps) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 200);
      },
      2000 + Math.random() * 3000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      animate={
        glitching
          ? {
              x: [0, -3, 3, -2, 2, 0],
              filter: rainbow
                ? [
                    "hue-rotate(0deg) saturate(1)",
                    "hue-rotate(90deg) saturate(1.5)",
                    "hue-rotate(180deg) saturate(2)",
                    "hue-rotate(270deg) saturate(1.5)",
                    "hue-rotate(0deg) saturate(1)",
                  ]
                : [
                    "hue-rotate(0deg)",
                    "hue-rotate(90deg)",
                    "hue-rotate(180deg)",
                    "hue-rotate(270deg)",
                    "hue-rotate(0deg)",
                  ],
            }
          : {}
      }
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <span className="relative z-10">{children}</span>
      {glitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-cyan opacity-90"
            style={{ clipPath: "inset(0 0 60% 0)" }}
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 0.15, repeat: 1 }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-pink opacity-90"
            style={{ clipPath: "inset(60% 0 0 0)" }}
            animate={{ x: [3, -3, 3] }}
            transition={{ duration: 0.15, repeat: 1 }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-orange opacity-70"
            style={{ clipPath: "inset(30% 0 30% 0)" }}
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 0.1, repeat: 2 }}
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.div>
  );
};
