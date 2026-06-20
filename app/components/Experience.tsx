"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Stagiaire en Développement d'Application",
    company: "FUSION GRAPHIC & PRINT",
    period: "Juillet – Septembre 2025",
    location: "Bafoussam, Cameroun",
    description: "Conception et déploiement d'un système de gestion informatisé des actes d'état civil.",
    tasks: [
      "Architecture modulaire avec séparation logique (API backend, UI, données) en Laravel, React JS, TypeScript, MySQL",
      "Centralisation des données administratives et conception d'un système évolutif adapté aux environnements institutionnels",
      "Mise en œuvre de la clean architecture et tests PHPUnit pour sécuriser les fonctionnalités critiques",
    ],
    tags: ["Laravel", "React JS", "TypeScript", "MySQL", "API REST", "PHPUnit"],
    color: "violet",
  },
  {
    type: "work",
    title: "Stagiaire en Systèmes et Réseaux",
    company: "ENVOL Learn & Travel",
    period: "Juillet – Septembre 2024",
    location: "Bafoussam, Cameroun",
    description: "Participation à la gestion et à la maintenance d'une infrastructure informatique.",
    tasks: [
      "Installation et configuration de postes de travail",
      "Gestion des utilisateurs et des droits d'accès",
      "Diagnostic et résolution de problèmes réseau",
      "Application des bonnes pratiques de sécurité",
    ],
    tags: ["Réseaux", "Administration système", "Sécurité", "REGEX"],
    color: "cyan",
  },
  {
    type: "work",
    title: "Stagiaire en Développement Web",
    company: "ALLO-TRAINING",
    period: "Juin – Août 2022",
    location: "Douala, Cameroun",
    description: "Mise en place d'un système de gestion d'une bibliothèque.",
    tasks: [
      "Conception from scratch d'une architecture applicative PHP procédural avec frontend HTML & CSS",
      "Modélisation des entités et des relations (livres, utilisateurs, emprunts)",
      "Mise en place de contrôles de cohérence des données",
    ],
    tags: ["PHP", "HTML", "CSS", "MySQL"],
    color: "pink",
  },
];

const education = [
  {
    degree: "Licence 3 en Génie Logiciel",
    school: "Institut Africain d'Informatique",
    location: "Yaoundé",
    period: "2025 – En cours",
    current: true,
  },
  {
    degree: "Licence 2 en Génie Logiciel",
    school: "Institut Africain d'Informatique",
    location: "Bafoussam",
    period: "2024 – 2025",
    current: false,
  },
  {
    degree: "Licence 1 en Génie Logiciel",
    school: "Institut Africain d'Informatique",
    location: "Bafoussam",
    period: "2023 – 2024",
    current: false,
  },
  {
    degree: "Baccalauréat Scientifique — Technologie de l'Information",
    school: "Lycée Bilingue de Yaoundé",
    location: "Yaoundé",
    period: "2022 – 2023",
    current: false,
  },
];

const colorMap: Record<string, { dot: string; border: string; tag: string }> = {
  violet: { dot: "bg-violet-500", border: "border-violet-500/30", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20" },
  pink: { dot: "bg-pink-500", border: "border-pink-500/30", tag: "bg-pink-500/10 text-pink-300 border-pink-500/20" },
  cyan: { dot: "bg-cyan-500", border: "border-cyan-500/30", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
};

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

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3 block">
              Parcours
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expériences & Formation
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Expériences */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                  <Briefcase size={17} className="text-violet-400" />
                </div>
                <h3 className="text-lg font-bold">Expériences professionnelles</h3>
              </div>
            </FadeIn>

            <div className="relative pl-6 border-l border-white/8 space-y-8">
              {experiences.map((exp, i) => {
                const c = colorMap[exp.color];
                return (
                  <FadeIn key={exp.title} delay={0.1 * i}>
                    <div className="relative">
                      <div className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full ${c.dot} ring-4 ring-[#0f0f1a]`} />
                      <div className={`p-5 rounded-2xl bg-white/3 border ${c.border} hover:bg-white/5 transition-colors`}>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-sm">{exp.title}</h4>
                          <span className="text-xs text-white/35 shrink-0">{exp.period}</span>
                        </div>
                        <p className="text-xs text-violet-400 font-medium mb-1">
                          {exp.company} · {exp.location}
                        </p>
                        <p className="text-xs text-white/50 italic mb-3">{exp.description}</p>
                        <ul className="space-y-1.5 mb-4">
                          {exp.tasks.map((t, j) => (
                            <li key={j} className="text-xs text-white/55 flex gap-2">
                              <span className="text-white/25 mt-0.5 shrink-0">▸</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span key={tag} className={`px-2 py-0.5 rounded-full text-xs border ${c.tag}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Formation */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <GraduationCap size={17} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold">Formation</h3>
              </div>
            </FadeIn>

            <div className="relative pl-6 border-l border-white/8 space-y-6">
              {education.map((edu, i) => (
                <FadeIn key={edu.degree} delay={0.1 * i}>
                  <div className="relative">
                    <div className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full ring-4 ring-[#0f0f1a] ${edu.current ? "bg-emerald-400" : "bg-white/20"}`} />
                    <div className={`p-5 rounded-2xl border transition-colors ${edu.current ? "bg-emerald-500/5 border-emerald-500/25" : "bg-white/3 border-white/8 hover:bg-white/5"}`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{edu.degree}</h4>
                        {edu.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400">
                            En cours
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-emerald-400 font-medium mb-0.5">
                        {edu.school}
                      </p>
                      <p className="text-xs text-white/40">
                        {edu.location} · {edu.period}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
