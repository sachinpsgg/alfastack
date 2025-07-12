import { useState, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GlitchText } from "../animations/GlitchText";
import { MagneticButton } from "../animations/MagneticButton";

export const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-20%",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Message transmitted across the quantum realm! We'll initiate contact protocols immediately.",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-10 h-10" />,
      text: "command@alfastack.com",
      color: "hsl(var(--brand-500))",
    },
    {
      icon: (
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-lg neon-glow"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--brand-500)), hsl(var(--cyan)))",
          }}
        >
          AS
        </div>
      ),
      text: "+1 (555) QUANTUM-LINK",
      color: "hsl(var(--cyan))",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-10 h-10" />,
      href: "#",
      color: "hsl(var(--brand-500))",
    },
    {
      icon: <Linkedin className="w-10 h-10" />,
      href: "#",
      color: "hsl(var(--cyan))",
    },
    {
      icon: <Twitter className="w-10 h-10" />,
      href: "#",
      color: "hsl(var(--pink))",
    },
  ];

  const formFields = [
    {
      id: "name",
      label: "QUANTUM IDENTITY",
      type: "text",
      value: formData.name,
      color: "hsl(var(--brand-500))",
    },
    {
      id: "email",
      label: "DIMENSIONAL ADDRESS",
      type: "email",
      value: formData.email,
      color: "hsl(var(--cyan))",
    },
    {
      id: "message",
      label: "REALITY BLUEPRINT",
      type: "textarea",
      value: formData.message,
      color: "hsl(var(--pink))",
    },
  ];

  return (
    <section ref={ref} className="py-48 px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, rgba(56,189,248,0.05) 50%, transparent 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 3 }}
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
            initial={{ opacity: 0, scale: 0.2 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
          >
            INITIATE{" "}
            <GlitchText className="gradient-text pulsing-glow" rainbow>
              CONTACT
            </GlitchText>
          </motion.h2>
          <motion.p
            className="text-2xl text-muted-foreground max-w-5xl mx-auto font-light"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Ready to transcend dimensional boundaries and reshape reality?
            Connect with our transformation collective and let's architect your
            infinite multiverse together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="space-y-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h3 className="text-4xl font-black mb-12 text-brand-400 tracking-wider">
                QUANTUM CHANNELS
              </h3>
              <div className="space-y-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-8 group cursor-pointer"
                    whileHover={{ x: 20, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      className="group-hover:text-brand-300"
                      style={{ color: contact.color }}
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      transition={{ duration: 0.8 }}
                    >
                      {contact.icon}
                    </motion.div>
                    <span className="text-2xl font-bold group-hover:text-brand-300 transition-colors">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <h3 className="text-4xl font-black mb-12 text-brand-400 tracking-wider">
                DIMENSIONAL PORTALS
              </h3>
              <div className="flex gap-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0, rotate: -270 }}
                    animate={
                      isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: 1.2 + index * 0.15,
                      type: "spring",
                      stiffness: 400,
                    }}
                    whileHover={{
                      scale: 1.4,
                      y: -15,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 rounded-2xl glass-effect neon-border flex items-center justify-center transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
            onSubmit={handleSubmit}
            className="glass-effect rounded-3xl p-12 space-y-10 border-2 neon-border"
          >
            {formFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-black mb-4 uppercase tracking-[0.3em]"
                  style={{ color: field.color }}
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <motion.textarea
                    id={field.id}
                    value={field.value}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                    rows={5}
                    className="w-full px-8 py-6 rounded-2xl bg-background/50 border-2 border-brand-500/20 focus:outline-none transition-all duration-300 text-xl resize-none neon-glow"
                    style={{
                      borderColor: `${field.color}20`,
                    }}
                    whileFocus={{
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    required
                  />
                ) : (
                  <motion.input
                    type={field.type}
                    id={field.id}
                    value={field.value}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                    className="w-full px-8 py-6 rounded-2xl bg-background/50 border-2 border-brand-500/20 focus:outline-none transition-all duration-300 text-xl neon-glow"
                    style={{
                      borderColor: `${field.color}20`,
                    }}
                    whileFocus={{
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    required
                  />
                )}
              </motion.div>
            ))}

            <MagneticButton
              type="submit"
              variant="rainbow"
              className="w-full py-8 bg-gradient-to-r from-brand-500 via-cyan to-pink text-white rounded-2xl font-black text-2xl uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-6 group relative overflow-hidden neon-glow"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-300%", "300%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <span className="relative z-10 flex items-center gap-6">
                <Sparkles className="w-8 h-8" />
                TRANSMIT TO MULTIVERSE
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
              </span>
            </MagneticButton>
          </motion.form>
        </div>
      </div>

      {/* Enhanced Footer */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 2 }}
        className="mt-40 pt-16 border-t-2 border-brand-500/20 text-center"
      >
        <motion.p
          className="text-muted-foreground font-light text-xl"
          animate={{
            opacity: [0.7, 1, 0.7],
            background: [
              "linear-gradient(90deg, rgba(139,92,246,0.7) 0%, rgba(255,255,255,0.7) 50%, rgba(139,92,246,0.7) 100%)",
              "linear-gradient(90deg, rgba(56,189,248,0.7) 0%, rgba(255,255,255,0.7) 50%, rgba(236,72,153,0.7) 100%)",
            ],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity },
            background: { duration: 6, repeat: Infinity },
          }}
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          © 2024 ALFASTACK QUANTUM COLLECTIVE | TRANSCENDING REALITIES ACROSS
          INFINITE DIMENSIONS
        </motion.p>
      </motion.div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
