"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Rocket, Sparkles, Users } from "lucide-react";

const cards = [
  {
    icon: Code,
    title: "Clean Architecture",
    desc: "Conception modulaire avec séparation claire des responsabilités (API, UI, données), tests PHPUnit et maintenabilité garantie.",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Sparkles,
    title: "Intégration IA",
    desc: "J'enrichis les applications existantes avec des couches d'intelligence artificielle — NLP, recommandation, automatisation — pour créer une réelle valeur ajoutée.",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Rocket,
    title: "Performance & Sécurité",
    desc: "Approche DevSecOps intégrée : infrastructures performantes, sécurité by design, gestion fine des droits et des accès.",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Users,
    title: "Collaboration Agile",
    desc: "Méthodologie Agile/Scrum, Git/GitHub, communication claire et adaptation continue au sein d'équipes pluridisciplinaires.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
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

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3 block">
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Qui suis-je ?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-white/65 leading-relaxed">
              <p className="text-lg text-white/85 font-medium">
                Ingénieur logiciel passionné, étudiant en{" "}
                <span className="text-violet-400">Licence 3 Génie Logiciel</span>{" "}
                à l&apos;Institut Africain d&apos;Informatique de Yaoundé — je conçois
                des solutions numériques robustes, sécurisées et orientées impact.
              </p>
              <p>
                Mon expertise couvre l&apos;ensemble du cycle de développement logiciel :
                de la modélisation à la mise en production, en passant par l&apos;architecture
                distribuée, la clean architecture et les pratiques DevSecOps. Je m&apos;assure
                que chaque livrable est à la fois performant, maintenable et sécurisé.
              </p>
              <p>
                Convaincu que l&apos;<span className="text-cyan-400 font-medium">intelligence artificielle</span>{" "}
                représente le levier de transformation le plus puissant de notre époque,
                j&apos;intègre des couches IA dans des projets existants pour en décupler
                la valeur — qu&apos;il s&apos;agisse d&apos;automatiser des processus métier,
                d&apos;enrichir l&apos;expérience utilisateur ou d&apos;extraire de
                l&apos;intelligence à partir des données.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Yaoundé, Cameroun", "L3 Génie Logiciel", "Français & Anglais", "IA"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white/3 border border-violet-500/15">
                <p className="text-sm text-white/60 leading-relaxed italic">
                  <span className="text-violet-400 font-bold not-italic text-base">&ldquo;</span>
                  {" "}Comprendre ce que les autres ne comprennent pas encore et agir pendant qu&apos;ils attendent.{" "}
                  <span className="text-violet-400 font-bold not-italic text-base">&rdquo;</span>
                </p>
                <p className="text-xs text-white/30 mt-2 not-italic">— Ma philosophie</p>
              </div>
            </div>
          </FadeIn>

          {/* Photo + Stats */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-52 h-52 rounded-2xl overflow-hidden border border-violet-500/30 shadow-2xl shadow-violet-900/30">
                    <img src="/moi.jpeg" alt="Franklin NJIEPI" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 blur-lg -z-10" />
                </div>
              </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Expériences professionnelles" },
                { value: "6+", label: "Projets open source" },
                { value: "20+", label: "Technologies maîtrisées" },
                { value: "∞", label: "Curiosité & ambition" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl bg-white/3 border border-white/8 text-center hover:border-violet-500/30 transition-colors"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {s.value}
                  </div>
                  <div className="text-sm text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
            </div>
          </FadeIn>
        </div>

        {/* AI highlight banner */}
        <FadeIn delay={0.2}>
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
                <Sparkles size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">
                  L&apos;IA comme accélérateur de valeur
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  Au-delà du développement traditionnel, j&apos;accompagne les projets dans
                  leur transition vers des architectures augmentées par l&apos;IA :
                  chatbots intelligents, systèmes de recommandation, analyse prédictive,
                  automatisation de workflows — des fonctionnalités qui font la différence
                  sur des marchés de plus en plus compétitifs.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={0.1 * (i + 1)}>
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br ${c.color} border ${c.border} hover:-translate-y-1 transition-transform duration-300`}
              >
                <c.icon className={`w-7 h-7 ${c.iconColor} mb-4`} />
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
