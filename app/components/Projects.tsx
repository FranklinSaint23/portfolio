"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";

const projects = [
  {
    title: "Holla CM",
    desc: "Plateforme intelligente d'optimisation des flux de commandes et de livraison de biens et services en milieu urbain au Cameroun. Développée avec Flutter et Supabase.",
    tags: ["Flutter", "Dart", "Supabase", "Mobile"],
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    border: "border-violet-500/20 hover:border-violet-500/40",
    featured: true,
    github: "https://github.com/FranklinSaint23/holla-cm",
    live: null,
  },
  {
    title: "SGEC",
    desc: "Une plateforme intelligente, sécurisée et géospatiale pour la gestion des actes d’état civil dans un contexte africain.",
    tags: ["Electron", "React.js", "Laravel", "FastAPI", "API REST", "PostgreSQL", "Géospatial"],
    gradient: "from-emerald-600/20 via-green-600/10 to-transparent",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    featured: true,
    github: "https://github.com/FranklinSaint23/sgec",
    live: null,
  },
  {
    title: "Tontine",
    desc: "Gérez vos tontines simplement — cotisations, cycles rotatifs, crédits et membres, tout en un seul endroit.",
    tags: ["React JS", "FastAPI"],
    gradient: "from-cyan-600/20 via-teal-600/10 to-transparent",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    featured: false,
    github: "https://github.com/FranklinSaint23/tontine",
    live: null,
  },
  {
    title: "Suivi Stagiaires",
    desc: "Application intelligente de suivi des stagiaires avec géolocalisation en temps réel. Permet aux encadrants de suivre la présence et le parcours des stagiaires.",
    tags: ["Laravel", "Blade", "PHP", "Géolocalisation"],
    gradient: "from-pink-600/20 via-rose-600/10 to-transparent",
    border: "border-pink-500/20 hover:border-pink-500/40",
    featured: false,
    github: "https://github.com/FranklinSaint23/suivi_stagiaires",
    live: null,
  },
  {
    title: "Tutoriel Vidéo App",
    desc: "Application web de tutoriels vidéos avec catégorisation, recherche et lecteur intégré.",
    tags: ["PHP", "Laravel", "MySQL"],
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    border: "border-amber-500/20 hover:border-amber-500/40",
    featured: false,
    github: "https://github.com/FranklinSaint23/tutoriel-video-app",
    live: null,
  },
  {
    title: "GSF ENEO",
    desc: "Déploiement d'une base de données répartie pour la gestion des situations familiales des agents d'ENEO Cameroun.",
    tags: ["Base de données", "SQL", "Architecture distribuée"],
    gradient: "from-indigo-600/20 via-blue-600/10 to-transparent",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    featured: false,
    github: "https://github.com/FranklinSaint23/gsf_eneo",
    live: null,
  },
];

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

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3 block">
              Projets
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que j&apos;ai réalisé
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mx-auto" />
          </div>
        </FadeIn>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * i}>
              <div
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${p.gradient} border ${p.border} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/50">
                    Projet principal
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <GitHubIcon size={15} /> Code source
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                    >
                      <ExternalLink size={15} /> Demo live
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Others */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {others.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * i}>
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br ${p.gradient} border ${p.border} transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}
              >
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-xs text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <GitHubIcon size={15} />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <a
              href="https://github.com/FranklinSaint23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
            >
              Voir tous mes projets sur GitHub
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
