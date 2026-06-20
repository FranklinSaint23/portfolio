"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    name: "Spécialisation & Backend",
    color: "violet",
    skills: [
      { name: "PHP / Laravel", level: 90 },
      { name: "API REST", level: 88 },
      { name: "Java / Jakarta EE", level: 72 },
      { name: "Python / Django / FastAPI", level: 68 },
    ],
  },
  {
    name: "Frontend & Mobile",
    color: "pink",
    skills: [
      { name: "React JS / TypeScript", level: 85 },
      { name: "HTML / CSS / Bootstrap", level: 92 },
      { name: "Flutter / Dart", level: 78 },
      { name: "Android Studio / Ionic", level: 65 },
    ],
  },
  {
    name: "IA & Automatisation",
    color: "amber",
    skills: [
      { name: "Intégration API IA (OpenAI, Groq, Anthropic, etc...)", level: 80 },
      { name: "Automatisation de workflows", level: 75 },

    ],
  },
  {
    name: "Base de données & Outils",
    color: "cyan",
    skills: [
      { name: "MySQL / PostgreSQL", level: 88 },
      { name: "MongoDB / SQL Server", level: 75 },
      { name: "Git / GitHub / Docker", level: 85 },
      { name: "UML / MERISE / Agile", level: 80 },
    ],
  },
];

const colorMap: Record<string, { bar: string; text: string; bg: string }> = {
  violet: {
    bar: "from-violet-500 to-violet-400",
    text: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  pink: {
    bar: "from-pink-500 to-pink-400",
    text: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
  amber: {
    bar: "from-amber-500 to-yellow-400",
    text: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  cyan: {
    bar: "from-cyan-500 to-cyan-400",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const c = colorMap[color];
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className={`font-mono ${c.text}`}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${c.bar} rounded-full`}
        />
      </div>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

const techBadges = [
  "PHP", "Laravel", "Java", "Jakarta EE", "Python", "Django",
  "React JS", "TypeScript", "Next.JS", "JavaScript", "Flutter", "Dart", "Ionic",
  "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Figma", "SIG",
  "MySQL", "PostgreSQL", "SQL Server", "Oracle", "MongoDB", "Git", "Docker", "UML", "MERISE", "Agile/Scrum",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-3 block">
              Compétences
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mon stack technique
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mx-auto" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <FadeIn key={cat.name} delay={0.1 * ci}>
                <div className={`p-6 rounded-2xl border ${c.bg} space-y-5`}>
                  <h3 className={`font-bold text-lg ${c.text}`}>{cat.name}</h3>
                  {cat.skills.map((s, si) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      color={cat.color}
                      delay={0.1 * ci + 0.1 * si}
                    />
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Soft skills */}
        <FadeIn delay={0.2}>
          <div className="mb-10">
            <p className="text-sm text-white/40 mb-5 uppercase tracking-widest text-center">Soft Skills</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Travail sous pression", "Rigueur", "Communication", "Adaptabilité", "Autonomie", "Esprit d'analyse"].map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tech badges */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <p className="text-sm text-white/40 mb-5 uppercase tracking-widest">
              Technologies maîtrisées
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/65 hover:text-white hover:border-white/25 hover:bg-white/8 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
