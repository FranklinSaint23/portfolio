"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Sparkles, Cloud, Palette, Wrench, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Développement Web Fullstack",
    desc: "Conception et développement d'applications web complètes — API REST backend avec Laravel, Django ou Node.js, et interfaces modernes avec React, Next.js et TypeScript. Architecture propre, maintenable et orientée performance.",
    tags: ["Laravel", "React", "Next.js", "TypeScript", "API REST"],
    color: "violet",
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    desc: "Création d'applications mobiles cross-platform avec Flutter/Dart et Android Studio, offrant des expériences utilisateur fluides et performantes sur iOS et Android.",
    tags: ["Flutter", "Dart", "Android", "Ionic"],
    color: "pink",
  },
  {
    icon: Sparkles,
    title: "Intégration IA & Automatisation",
    desc: "Enrichissement d'applications existantes avec des couches d'intelligence artificielle : chatbots, recommandation, analyse prédictive, RAG et automatisation de workflows métier via LangChain et les APIs OpenAI, Groq, Anthropic.",
    tags: ["OpenAI", "LangChain", "RAG", "FastAPI", "Groq"],
    color: "amber",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    desc: "Mise en place de pipelines CI/CD, containerisation Docker, déploiement cloud et administration Linux/Ubuntu. Approche DevSecOps garantissant des infrastructures sécurisées, scalables et hautement disponibles.",
    tags: ["Docker", "CI/CD", "Linux", "Ubuntu", "Git"],
    color: "cyan",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    desc: "Conception d'interfaces utilisateur modernes et intuitives avec Figma, Stitch et Canva — maquettes, prototypes interactifs et systèmes de design cohérents orientés expérience utilisateur.",
    tags: ["Figma", "Stitch", "Bootstrap", "Tailwind CSS", "Canva"],
    color: "emerald",
  },
  {
    icon: Wrench,
    title: "Maintenance Informatique",
    desc: "Diagnostic et résolution de pannes matérielles et logicielles, gestion des postes de travail, administration réseau, gestion des droits d'accès et sécurisation des systèmes d'information.",
    tags: ["Réseaux", "Windows", "Linux", "Sécurité", "Systèmes"],
    color: "rose",
  },
  {
    icon: Lightbulb,
    title: "Consulting IT",
    desc: "Accompagnement stratégique des projets informatiques : audit technique, choix d'architecture, recommandations technologiques et feuille de route digitale — pour transformer vos enjeux métier en solutions concrètes.",
    tags: ["Audit", "Architecture", "Stratégie", "Agile", "UML"],
    color: "indigo",
  },
];

const colorMap: Record<string, { icon: string; border: string; tag: string }> = {
  violet: {
    icon: "text-violet-400 bg-violet-500/15 border-violet-500/25",
    border: "border-violet-500/20 hover:border-violet-500/40",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  pink: {
    icon: "text-pink-400 bg-pink-500/15 border-pink-500/25",
    border: "border-pink-500/20 hover:border-pink-500/40",
    tag: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  },
  amber: {
    icon: "text-amber-400 bg-amber-500/15 border-amber-500/25",
    border: "border-amber-500/20 hover:border-amber-500/40",
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
  cyan: {
    icon: "text-cyan-400 bg-cyan-500/15 border-cyan-500/25",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  emerald: {
    icon: "text-emerald-400 bg-emerald-500/15 border-emerald-500/25",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  rose: {
    icon: "text-rose-400 bg-rose-500/15 border-rose-500/25",
    border: "border-rose-500/20 hover:border-rose-500/40",
    tag: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  },
  indigo: {
    icon: "text-indigo-400 bg-indigo-500/15 border-indigo-500/25",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
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

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3 block">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que je peux faire pour vous
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              De la conception à la mise en production, j&apos;accompagne vos projets à chaque étape — avec rigueur, créativité et une expertise technique solide.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const c = colorMap[svc.color];
            return (
              <FadeIn key={svc.title} delay={0.08 * i}>
                <div
                  className={`group p-6 rounded-2xl bg-white/3 border ${c.border} hover:-translate-y-1 transition-all duration-300 h-full flex flex-col`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${c.icon}`}
                  >
                    <svc.icon size={20} />
                  </div>
                  <h3 className="font-bold text-base mb-3">{svc.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-5 flex-1">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-full text-xs border ${c.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium bg-gradient-to-r from-amber-500 to-pink-600 hover:from-amber-400 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-orange-900/30 hover:-translate-y-0.5"
            >
              Discutons de votre projet
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
