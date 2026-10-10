import React from "react";
import ReactDOM from "react-dom/client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Cpu,
  Code2,
  BrainCircuit,
  ExternalLink,
  Sun,
  Moon,
  Radio,
} from "lucide-react";

import "./styles.css";

/* ================================================================
   DONNÉES — EXPÉRIENCES PROFESSIONNELLES
================================================================ */

const professionalProjects = [
  {
    period: "10/02/2026 — 31/07/2026",
    company: "ACTIA Aeronautic Services Tunisie",
    type: "Stage PFE",
    title: "Intégration de FreeRTOS sur une plateforme embarquée",
    description:
      "Intégration d’une architecture temps réel sur une plateforme Renesas RL78/G14 destinée à un combiné d’instruments.",
    contribution: [
      "FreeRTOS — intégration sur RL78/G14",
      "Tâches temps réel — architecture multitâche",
      "CAN / SAE J1939 — échange de données",
      "Sémaphores / mutex — synchronisation des tâches",
      "Interruptions — traitement des événements CAN",
      "Vehicle Spy — validation des échanges CAN",
    ],
    technologies: [
      "C",
      "FreeRTOS",
      "RL78/G14",
      "CAN",
      "J1939",
      "LIN",
      "IAR",
      "Vehicle Spy",
    ],
    image: "/projects/actia.jpg",
  },

  {
    period: "07/2025 — 09/2025",
    company: "TN SMART IOT",
    type: "Stage",
    title: "Robot de nettoyage autonome",
    description:
      "Développement d’un prototype de robot autonome combinant navigation, vision par ordinateur et supervision.",
    contribution: [
      "Navigation autonome — déplacement du robot",
      "YOLOv8n — détection des déchets",
      "OpenCV — traitement des images",
      "Python — développement logiciel",
      "Flutter — application mobile de supervision",
      "Raspberry Pi 4 — traitement embarqué",
    ],
    technologies: [
      "Python",
      "YOLOv8n",
      "Raspberry Pi 4",
      "OpenCV",
      "Flutter",
      "IoT",
    ],
    image: "/projects/robot-nettoyage.jpg",
  },

  {
    period: "07/2024 — 09/2024",
    company: "Artibedded",
    type: "Stage",
    title: "Outil de diagnostic I²C sur ESP32-C6",
    description:
      "Conception d’un outil de diagnostic embarqué pour analyser et tester plusieurs périphériques I²C.",
    contribution: [
      "C++ — développement de l’outil",
      "I²C — communication avec les périphériques",
      "Détection — identification des périphériques",
      "TCA9548A — gestion des bus I²C",
      "ATtiny85 — tests des communications",
      "ESP32-C6 — plateforme de diagnostic",
    ],
    technologies: [
      "C++",
      "ESP32-C6",
      "I²C",
      "TCA9548A",
      "ATtiny85",
      "Arduino",
    ],
    image: "/projects/diagnostic-i2c.jpg",
  },
];

/* ================================================================
   DONNÉES — PROJETS ACADÉMIQUES
================================================================ */

const academicProjects = [
  {
    category: "IoT · Machine Learning",
    title: "Système d’Irrigation Intelligent",
    description:
      "Conception d’un système d’irrigation basé sur ESP32-C6, Random Forest, Flask et SQLite pour la supervision et la décision d’irrigation.",
    contribution: [
      "ESP32-C6 — acquisition des données",
      "Random Forest — décision d’irrigation",
      "Flask — interface web de supervision",
      "SQLite — stockage des données",
      "Capteurs — acquisition environnementale",
      "IoT — supervision du système",
    ],
    technologies: [
      "ESP32-C6",
      "C++",
      "Python",
      "Random Forest",
      "Flask",
      "SQLite",
      "IoT",
    ],
    image: "/projects/smart-irrigation.jpg",
  },

  {
    category: "Edge AI · Computer Vision",
    title: "Analyse émotionnelle embarquée",
    description:
      "Développement d’une solution d’analyse émotionnelle basée sur la vision par ordinateur et déployée sur Raspberry Pi 5.",
    contribution: [
      "CNN — étude des architectures",
      "Images — prétraitement des données",
      "TensorFlow — entraînement du modèle",
      "OpenCV — traitement d’images",
      "Modèle — évaluation des performances",
      "Raspberry Pi 5 — déploiement embarqué",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "OpenCV",
      "Deep Learning",
      "Raspberry Pi 5",
    ],
    image: "/projects/analyse-emotionnelle.jpg",
  },

  {
    category: "Embedded Linux · Virtualisation",
    title: "Validation de Logiciel Embarqué en Environnement Virtuel",
    description:
      "Mise en place d’un environnement QEMU pour simuler un Raspberry Pi 3B et valider des applications embarquées.",
    contribution: [
      "QEMU — simulation du Raspberry Pi 3B",
      "Linux embarqué — configuration de l’environnement",
      "C — compilation d’applications",
      "GDB — débogage des applications",
      "Tests — validation du logiciel",
      "Bash — automatisation des tâches",
    ],
    technologies: [
      "QEMU",
      "Raspberry Pi 3B",
      "Linux embarqué",
      "GDB",
      "C",
      "Bash",
    ],
    image: "/projects/qemu-validation.jpg",
  },
];

/* ================================================================
   TRADUCTIONS
================================================================ */

const projectTranslations = {
  en: {
    professional: [
      {
        type: "Final-year Internship",
        title: "FreeRTOS Integration on an Embedded Platform",
        description:
          "Integration of a real-time architecture on a Renesas RL78/G14 platform designed for an instrument cluster.",
        contribution: [
          "FreeRTOS — integration on RL78/G14",
          "Real-time tasks — multitasking architecture",
          "CAN / SAE J1939 — data exchange",
          "Semaphores / mutexes — task synchronization",
          "Interrupts — CAN event handling",
          "Vehicle Spy — CAN communication validation",
        ],
      },

      {
        type: "Internship",
        title: "Autonomous Cleaning Robot",
        description:
          "Development of an autonomous robot prototype combining navigation, computer vision and supervision.",
        contribution: [
          "Autonomous navigation — robot movement",
          "YOLOv8n — waste detection",
          "OpenCV — image processing",
          "Python — software development",
          "Flutter — mobile supervision application",
          "Raspberry Pi 4 — embedded processing",
        ],
      },

      {
        type: "Internship",
        title: "I²C Diagnostic Tool on ESP32-C6",
        description:
          "Design of an embedded diagnostic tool for analyzing and testing multiple I²C peripherals.",
        contribution: [
          "C++ — tool development",
          "I²C — peripheral communication",
          "Detection — peripheral identification",
          "TCA9548A — I²C bus management",
          "ATtiny85 — communication testing",
          "ESP32-C6 — diagnostic platform",
        ],
      },
    ],

    academic: [
      {
        category: "IoT · Machine Learning",
        title: "Smart Irrigation System",
        description:
          "Design of an irrigation system based on ESP32-C6, Random Forest, Flask and SQLite for monitoring and irrigation decision-making.",
        contribution: [
          "ESP32-C6 — data acquisition",
          "Random Forest — irrigation decision-making",
          "Flask — web monitoring interface",
          "SQLite — data storage",
          "Sensors — environmental data acquisition",
          "IoT — system monitoring",
        ],
      },

      {
        category: "Edge AI · Computer Vision",
        title: "Embedded Emotion Analysis",
        description:
          "Development of an emotion analysis solution based on computer vision and deployed on Raspberry Pi 5.",
        contribution: [
          "CNN — architecture study",
          "Images — data preprocessing",
          "TensorFlow — model training",
          "OpenCV — image processing",
          "Model — performance evaluation",
          "Raspberry Pi 5 — embedded deployment",
        ],
      },

      {
        category: "Embedded Linux · Virtualization",
        title: "Embedded Software Validation in a Virtual Environment",
        description:
          "Implementation of a QEMU environment to simulate a Raspberry Pi 3B and validate embedded applications.",
        contribution: [
          "QEMU — Raspberry Pi 3B simulation",
          "Embedded Linux — environment configuration",
          "C — application compilation",
          "GDB — application debugging",
          "Testing — software validation",
          "Bash — task automation",
        ],
      },
    ],
  },
};

/* ================================================================
   ANIMATION
================================================================ */

function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================
   TITRE DE SECTION
================================================================ */

function SectionTitle({ eyebrow, title, description }) {
  return (
    <Reveal>
      <div className="section-title mb-14 max-w-4xl">
        <p className="section-eyebrow mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {eyebrow}
        </p>

        <h2 className="section-heading text-xl font-semibold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="section-description mt-4 max-w-2xl text-sm leading-6 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/* ================================================================
   IMAGE
================================================================ */

function ProjectImage({ src, alt }) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,#164858,#061116_70%)]">
        <Cpu
          size={80}
          strokeWidth={1}
          className="text-accent opacity-70"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  );
}

/* ================================================================
   CARTE EXPÉRIENCE
================================================================ */

function ProfessionalCard({ project, index, language }) {
  const translation =
    language === "en"
      ? projectTranslations.en.professional[index]
      : project;

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="professional-card group grid h-full overflow-hidden rounded-[2rem] border shadow-sm transition duration-500 hover:shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">

        <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
          <ProjectImage
            src={project.image}
            alt={translation.title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

          <div className="absolute left-6 top-6">
            <span className="rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              {translation.type}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {project.company}
            </div>

            <div className="text-sm text-white/60">
              {project.period}
            </div>
          </div>
        </div>

        <div className="professional-content flex min-h-full flex-col p-8 sm:p-10 lg:p-12">

          <h3 className="card-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {translation.title}
          </h3>

          <div className="mt-8">
            <h4 className="content-label text-[11px] font-bold uppercase tracking-[0.22em]">
              Mission
            </h4>

            <p className="content-description mt-3 text-base leading-7">
              {translation.description}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="content-label-secondary text-[11px] font-bold uppercase tracking-[0.22em]">
              {language === "fr" ? "Points clés" : "Key points"}
            </h4>

            <div className="mt-5 space-y-3">
              {translation.contribution.map((item) => {
                const separatorIndex = item.indexOf(" — ");

                const title =
                  separatorIndex !== -1
                    ? item.slice(0, separatorIndex)
                    : item;

                const detail =
                  separatorIndex !== -1
                    ? item.slice(separatorIndex + 3)
                    : "";

                return (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                    <p className="content-item text-sm leading-6">
                      <span className="content-item-title font-semibold">
                        {title}
                      </span>

                      {detail && (
                        <>
                          {" — "}
                          {detail}
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="technologies mt-auto pt-7">
            <div className="mb-4">
              <span className="technology-label text-[11px] font-bold uppercase tracking-[0.22em]">
                Technologies
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="technology-pill rounded-lg border px-3 py-1.5 text-xs font-medium transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </article>
    </Reveal>
  );
}

/* ================================================================
   CARTE PROJET ACADÉMIQUE
================================================================ */

function AcademicCard({ project, index, language }) {
  const translation =
    language === "en"
      ? projectTranslations.en.academic[index]
      : project;

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="academic-card group flex h-full flex-col overflow-hidden rounded-[2rem] text-white shadow-xl transition duration-500 hover:shadow-2xl">

        <div className="relative h-[260px] shrink-0 overflow-hidden sm:h-[280px]">
          <ProjectImage
            src={project.image}
            alt={translation.title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {translation.category}
            </span>
          </div>
        </div>

        <div className="academic-content flex flex-1 flex-col p-7 sm:p-8">

          <h3 className="text-2xl font-semibold leading-tight">
            {translation.title}
          </h3>

          <p className="academic-description mt-5 text-sm leading-7">
            {translation.description}
          </p>

          <div className="mt-6 space-y-3">
            {translation.contribution.map((item) => {
              const separatorIndex = item.indexOf(" — ");

              const title =
                separatorIndex !== -1
                  ? item.slice(0, separatorIndex)
                  : item;

              const detail =
                separatorIndex !== -1
                  ? item.slice(separatorIndex + 3)
                  : "";

              return (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                  <span className="academic-item text-sm leading-6">
                    <span className="academic-item-title font-semibold">
                      {title}
                    </span>

                    {detail && (
                      <>
                        {" — "}
                        {detail}
                      </>
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="academic-technologies mt-auto border-t pt-6">
            <div className="mb-4">
              <span className="academic-technology-label text-[11px] font-bold uppercase tracking-[0.22em]">
                Technologies
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="academic-technology-pill rounded-lg border px-3 py-1.5 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </article>
    </Reveal>
  );
}

/* ================================================================
   APPLICATION
================================================================ */

function App() {
  const [language, setLanguage] = React.useState("fr");

  /*
   * IMPORTANT :
   * Le mode clair est le mode par défaut.
   *
   * On ne regarde PAS le thème Windows/macOS.
   * Le dark mode est activé uniquement si l'utilisateur
   * l'a déjà choisi sur ce navigateur.
   */

  const [darkMode, setDarkMode] = React.useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }

    return false;
  });

  const isFrench = language === "fr";

  /* LANGUE */

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  /* DARK MODE */

  React.useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  /* ============================================================== 
     CONTENU
  ============================================================== */

  const content = {
    fr: {
      nav: {
        experience: "Expérience",
        projects: "Projets",
        skills: "Compétences",
        education: "Formation",
        contact: "Contact",
      },

      hero: {
        subtitle: "Ingénieur en systèmes embarqués",
        about: "À propos",
        description:
          "Jeune ingénieur en systèmes embarqués, diplômé de l’ENET’Com, spécialisé dans le développement de solutions électroniques et logicielles embarquées. Je m’intéresse particulièrement aux systèmes temps réel, à l’IoT, à Linux embarqué, à l’automobile et à l’intelligence artificielle embarquée.",
        discover: "Découvrir mon parcours",
        cv: "Télécharger le CV",
        location: "Sfax, Tunisie",
      },

      experience: {
        eyebrow: "Expérience professionnelle",
        title: "Des expériences industrielles concrètes",
        description:
          "Mes expériences en entreprise m’ont permis de travailler sur des systèmes embarqués réels, de la conception logicielle à la validation.",
      },

      projects: {
        eyebrow: "Projets académiques",
        title: "Explorer, concevoir, expérimenter",
        description:
          "Des projets développés à l’ENET’Com autour de l’IoT, de l’intelligence artificielle, du logiciel embarqué et de Linux embarqué.",
      },

      skills: {
        eyebrow: "Compétences",
        title: "Une stack orientée systèmes embarqués",
        description:
          "Mes compétences techniques, regroupées en quatre domaines complémentaires.",

        groups: [
          {
            title: "Développement logiciel",
            description:
              "Programmation et outils utilisés pour développer des applications et interfaces de supervision.",
            items: [
              "C / C++",
              "Python",
              "Bash",
              "Git",
              "Flask",
              "SQLite",
              "Flutter",
            ],
            focus: "Programmation · Scripts · Applications",
          },

          {
            title: "Systèmes embarqués",
            description:
              "Développement temps réel sur microcontrôleurs et plateformes embarquées.",
            items: [
              "FreeRTOS",
              "STM32",
              "RL78/G14",
              "ESP32-C6",
              "Raspberry Pi",
            ],
            focus: "Firmware · Temps réel · Microcontrôleurs",
          },

          {
            title: "Protocoles de communication",
            description:
              "Protocoles et interfaces utilisés pour les échanges de données entre systèmes embarqués.",
            items: [
              "CAN",
              "SAE J1939",
              "LIN",
              "SPI",
              "I²C",
              "UART",
              "Wi-Fi",
              "BLE"
            ],
            focus: "Bus · Protocoles · Interfaces",
          },

          {
            title: "Linux embarqué & IA",
            description:
              "Environnements Linux et technologies de vision par ordinateur et d’intelligence artificielle embarquée.",
            items: [
              "Linux embarqué",
              "OpenCV",
              "TensorFlow",
              "YOLO",
            ],
            focus: "Système · Vision par ordinateur · IA embarquée",
          },
        ],
      },

      education: {
        eyebrow: "Formation",
        title: "Formation académique",
        description:
          "Mon parcours académique en électronique, communication et systèmes embarqués.",

        engineering:
          "Diplôme d’Ingénieur en Génie des Systèmes Électroniques de Communication",

        engineeringSchool:
          "École Nationale d’Électronique et des Télécommunications de Sfax — ENET’Com",

        engineeringDescription:
          "Formation orientée systèmes électroniques, systèmes embarqués, communication, programmation et technologies IoT.",

        preparatory:
          "Cycle préparatoire Physique-Technique",

        preparatorySchool:
          "Institut Préparatoire aux Études d’Ingénieurs de Sfax — IPEIS",

        preparatoryDescription:
          "Formation scientifique intensive en mathématiques, physique, informatique et sciences de l’ingénieur.",
      },

      contact: {
        eyebrow: "Contact",
        title: "Construisons quelque chose de solide",
        description:
          "Je suis ouvert aux opportunités dans les systèmes embarqués, le logiciel automobile, Linux embarqué, l’IoT et l’intelligence artificielle embarquée.",
      },

      footer:
        "© 2026 Ahmed Kammoun · Embedded Systems Engineer",
    },

    en: {
      nav: {
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        contact: "Contact",
      },

      hero: {
        subtitle: "Embedded Systems Engineer",
        about: "About",
        description:
          "Young embedded systems engineer, graduated from ENET’Com, specialized in the development of embedded electronic and software solutions. Particularly interested in real-time systems, IoT, embedded Linux, automotive systems and embedded artificial intelligence.",
        discover: "Explore my background",
        cv: "Download CV",
        location: "Sfax, Tunisia",
      },

      experience: {
        eyebrow: "Professional Experience",
        title: "Hands-on industrial experience",
        description:
          "My professional experiences have allowed me to work on real embedded systems, from software development to validation.",
      },

      projects: {
        eyebrow: "Academic Projects",
        title: "Explore, build, experiment",
        description:
          "Projects developed at ENET’Com around IoT, artificial intelligence, embedded software and embedded Linux.",
      },

      skills: {
        eyebrow: "Skills",
        title: "An embedded systems-oriented stack",
        description:
          "My technical skills, organized into four complementary areas.",

        groups: [
          {
            title: "Software Development",
            description:
              "Programming languages and tools for software and monitoring applications.",
            items: [
              "C / C++",
              "Python",
              "Bash",
              "Git",
              "Flask",
              "SQLite",
              "Flutter",
            ],
            focus: "Programming · Scripting · Applications",
          },

          {
            title: "Embedded Systems",
            description:
              "Real-time development on microcontrollers and embedded platforms.",
            items: [
              "FreeRTOS",
              "STM32",
              "RL78/G14",
              "ESP32-C6",
              "Raspberry Pi",
            ],
            focus: "Firmware · Real-time · Microcontrollers",
          },

          {
            title: "Communication Protocols",
            description:
              "Protocols and interfaces used to exchange data between embedded systems.",
            items: [
              "CAN",
              "SAE J1939",
              "LIN",
              "SPI",
              "I²C",
              "UART",
              "Wi-Fi",
              "BLE"
            ],
            focus: "Buses · Protocols · Interfaces",
          },

          {
            title: "Embedded Linux & AI",
            description:
              "Linux environments and computer vision and artificial intelligence technologies for embedded systems.",
            items: [
              "Embedded Linux",
              "OpenCV",
              "TensorFlow",
              "YOLO",
            ],
            focus: "System · Computer Vision · Embedded AI",
          },
        ],
      },

      education: {
        eyebrow: "Education",
        title: "Academic background",
        description:
          "My academic background in electronics, communication and embedded systems.",

        engineering:
          "Engineering Degree in Electronic Communication Systems Engineering",

        engineeringSchool:
          "National School of Electronics and Telecommunications of Sfax — ENET’Com",

        engineeringDescription:
          "Education focused on electronic systems, embedded systems, communication, programming and IoT technologies.",

        preparatory:
          "Physics and Engineering Preparatory Program",

        preparatorySchool:
          "Preparatory Institute for Engineering Studies of Sfax — IPEIS",

        preparatoryDescription:
          "Intensive scientific education in mathematics, physics, computer science and engineering sciences.",
      },

      contact: {
        eyebrow: "Contact",
        title: "Let’s build something solid",
        description:
          "I am open to opportunities in embedded systems, automotive software, embedded Linux, IoT and embedded artificial intelligence.",
      },

      footer:
        "© 2026 Ahmed Kammoun · Embedded Systems Engineer",
    },
  };

  const t = content[language];

  /* ================================================================
     ICÔNES COMPÉTENCES
  ================================================================ */

  const skillIcons = [
    Code2,
    Cpu,
    Radio,
    BrainCircuit,
  ];

  return (
    <div className="site min-h-screen antialiased">

      {/* ==========================================================
          NAVBAR
      ========================================================== */}

      <header className="navbar fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">

        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">

          <a
            href="#accueil"
            className="flex items-center gap-3"
          >
            <span className="logo-mark grid h-9 w-9 place-items-center rounded-xl text-xs font-bold">
              AK
            </span>

            <span className="brand-name hidden text-sm font-semibold sm:block">
              Ahmed Kammoun
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm md:flex">

            <a href="#experience" className="nav-link">
              {t.nav.experience}
            </a>

            <a href="#projets" className="nav-link">
              {t.nav.projects}
            </a>

            <a href="#competences" className="nav-link">
              {t.nav.skills}
            </a>

            <a href="#formation" className="nav-link">
              {t.nav.education}
            </a>

            <a href="#contact" className="nav-link">
              {t.nav.contact}
            </a>

          </div>

          <div className="flex items-center gap-2">

            {/* DARK MODE */}

            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="theme-toggle grid h-10 w-10 place-items-center rounded-xl border transition"
              aria-label={
                darkMode
                  ? "Activer le mode clair"
                  : "Activer le mode sombre"
              }
              title={
                darkMode
                  ? "Mode clair"
                  : "Mode sombre"
              }
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* FR / EN */}

            <div className="language-switch flex items-center rounded-xl border p-1 text-xs font-semibold">

              <button
                type="button"
                onClick={() => setLanguage("fr")}
                aria-label="Version française"
                aria-pressed={isFrench}
                className={`rounded-lg px-3 py-2 transition ${
                  isFrench
                    ? "language-active"
                    : "language-inactive"
                }`}
              >
                FR
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-label="English version"
                aria-pressed={!isFrench}
                className={`rounded-lg px-3 py-2 transition ${
                  !isFrench
                    ? "language-active"
                    : "language-inactive"
                }`}
              >
                EN
              </button>

            </div>

          </div>

        </nav>

      </header>

      <main>

        {/* ========================================================
            HERO
        ======================================================== */}

        <section
          id="accueil"
          className="hero relative overflow-hidden pb-24 pt-36 sm:pt-44"
        >

          <div className="hero-grid pointer-events-none absolute inset-0" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

            <Reveal>

              <h1 className="hero-name text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                Ahmed
                <br />

                <span className="text-gradient">
                  KAMMOUN
                </span>
              </h1>

              <h2 className="hero-subtitle mt-7 text-xl font-semibold tracking-tight sm:text-2xl">
                {t.hero.subtitle}
              </h2>

              <div className="mt-8 max-w-2xl">

                {/* À PROPOS — ALIGNÉ SANS LIGNE */}

                <div className="mb-4">
                  <span className="hero-about-label text-xs font-bold uppercase tracking-[0.2em]">
                    {t.hero.about}
                  </span>
                </div>

                <p className="hero-description text-lg leading-8 sm:text-xl">
                  {t.hero.description}
                </p>

              </div>

              <div className="mt-8 flex flex-wrap gap-2">

                {[
                  "Embedded Software",
                  "RTOS",
                  "Automotive",
                  isFrench ? "Linux embarqué" : "Embedded Linux",
                  "IoT",
                  "Edge AI",
                ].map((item) => (
                  <span
                    key={item}
                    className="hero-pill rounded-full border px-4 py-2 text-xs font-medium transition"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#experience"
                  className="glow-button inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium"
                >
                  {t.hero.discover}
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/Ahmed_KAMMOUN_CV.pdf"
                  download
                  className="cv-button inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 font-medium transition"
                >
                  {t.hero.cv}
                  <Download size={18} />
                </a>

              </div>

              <div className="location mt-10 flex items-center gap-2 text-sm">
                <MapPin size={16} />
                {t.hero.location}
              </div>

            </Reveal>

            {/* PHOTO */}

            <Reveal delay={0.15}>

              <div className="relative mx-auto w-full max-w-md">

                <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-2xl" />

                <div className="profile-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">

                  <img
                    src="/profile.jpg"
                    alt="Ahmed Kammoun"
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                </div>

              </div>

            </Reveal>

          </div>

        </section>

        {/* ========================================================
            EXPÉRIENCE
        ======================================================== */}

        <section
          id="experience"
          className="experience-section py-28"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <SectionTitle
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              description={t.experience.description}
            />

            <div className="space-y-8">

              {professionalProjects.map((project, index) => (
                <ProfessionalCard
                  key={project.title}
                  project={project}
                  index={index}
                  language={language}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ========================================================
            PROJETS
        ======================================================== */}

        <section
          id="projets"
          className="projects-section py-28"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <SectionTitle
              eyebrow={t.projects.eyebrow}
              title={t.projects.title}
              description={t.projects.description}
            />

            <div className="grid items-stretch gap-6 lg:grid-cols-3">

              {academicProjects.map((project, index) => (
                <AcademicCard
                  key={project.title}
                  project={project}
                  index={index}
                  language={language}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ========================================================
            COMPÉTENCES
        ======================================================== */}

        <section
          id="competences"
          className="skills-section border-t py-28"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <SectionTitle
              eyebrow={t.skills.eyebrow}
              title={t.skills.title}
              description={t.skills.description}
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">

              {t.skills.groups.map((group, index) => {

                const Icon = skillIcons[index];

                return (
                  <Reveal
                    key={group.title}
                    delay={index * 0.06}
                    className="h-full"
                  >

                    <article className="skill-card flex h-full flex-col rounded-3xl border p-6 transition duration-500 hover:border-accent hover:shadow-xl">

                      {/* ICÔNE + NUMÉRO */}

                      <div className="flex items-start justify-between">

                        <div className="skill-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white shadow-sm">
                          <Icon
                            size={21}
                            strokeWidth={2}
                          />
                        </div>

                        <span className="pt-1 text-xs font-bold tracking-[0.18em] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      {/* TITRE */}

                      <h3 className="skill-title mt-6 text-xl font-semibold tracking-tight">
                        {group.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p className="content-description mt-3 text-sm leading-6">
                        {group.description}
                      </p>

                      {/* TECHNOLOGIES */}

                      <div className="mt-6 flex flex-wrap gap-2">

                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="technology-pill rounded-lg border px-3 py-1.5 text-xs font-medium transition hover:border-accent"
                          >
                            {item}
                          </span>
                        ))}

                      </div>

                      {/* FOCUS TECHNIQUE */}

                      <div className="mt-auto pt-6">

                        <p className="text-xs font-semibold tracking-wide text-accent-deep">
                          {group.focus}
                        </p>

                      </div>

                    </article>

                  </Reveal>
                );
              })}

            </div>

          </div>

        </section>

        {/* ========================================================
            FORMATION
        ======================================================== */}

        <section
          id="formation"
          className="education-section py-28"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <SectionTitle
              eyebrow={t.education.eyebrow}
              title={t.education.title}
              description={t.education.description}
            />

            <div className="grid items-stretch gap-5 lg:grid-cols-2">

              <Reveal className="h-full">

                <div className="education-card flex h-full flex-col rounded-3xl border p-8 transition duration-500">

                  <div className="education-year text-xs font-semibold uppercase tracking-[0.2em]">
                    2023 — 2026
                  </div>

                  <h3 className="education-title mt-4 text-2xl font-semibold">
                    {t.education.engineering}
                  </h3>

                  <p className="education-school mt-3">
                    {t.education.engineeringSchool}
                  </p>

                  <p className="education-description mt-auto pt-6 text-sm leading-7">
                    {t.education.engineeringDescription}
                  </p>

                </div>

              </Reveal>

              <Reveal
                delay={0.08}
                className="h-full"
              >

                <div className="education-card flex h-full flex-col rounded-3xl border p-8 transition duration-500">

                  <div className="education-year text-xs font-semibold uppercase tracking-[0.2em]">
                    2021 — 2023
                  </div>

                  <h3 className="education-title mt-4 text-2xl font-semibold">
                    {t.education.preparatory}
                  </h3>

                  <p className="education-school mt-3">
                    {t.education.preparatorySchool}
                  </p>

                  <p className="education-description mt-auto pt-6 text-sm leading-7">
                    {t.education.preparatoryDescription}
                  </p>

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ========================================================
            CONTACT
        ======================================================== */}

        <section
          id="contact"
          className="contact-section px-6 py-28 lg:px-10"
        >

          <Reveal>

            <div className="contact-card mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-[2.5rem] p-10 text-white sm:p-14 lg:grid-cols-[1.1fr_.9fr]">

              <div>

                <p className="contact-eyebrow text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.contact.eyebrow}
                </p>

                <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                  {t.contact.title}
                </h2>

                <p className="contact-description mt-4 max-w-xl text-sm leading-6 sm:text-base">
                  {t.contact.description}
                </p>

              </div>

              <div className="grid content-center gap-3">

                <a
                  href="mailto:ahmedkamoun2002@gmail.com"
                  className="contact-link flex items-center gap-4 rounded-2xl border px-5 py-4 text-sm transition"
                >
                  <Mail
                    size={19}
                    className="shrink-0 text-accent"
                  />

                  <span>
                    ahmedkamoun2002@gmail.com
                  </span>

                  <ExternalLink
                    size={14}
                    className="ml-auto shrink-0 opacity-40"
                  />
                </a>

                <a
                  href="tel:+21656162611"
                  className="contact-link flex items-center gap-4 rounded-2xl border px-5 py-4 text-sm transition"
                >
                  <Phone
                    size={19}
                    className="shrink-0 text-accent"
                  />

                  <span>
                    +216 56 162 611
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ahmed-kammoun-b79196308"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link flex items-center gap-4 rounded-2xl border px-5 py-4 text-sm transition"
                >
                  <Linkedin
                    size={19}
                    className="shrink-0 text-accent"
                  />

                  <span>
                    LinkedIn
                  </span>

                  <ExternalLink
                    size={14}
                    className="ml-auto shrink-0 opacity-40"
                  />
                </a>

                <a
                  href="https://github.com/AhmedKammoun10"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link flex items-center gap-4 rounded-2xl border px-5 py-4 text-sm transition"
                >
                  <Github
                    size={19}
                    className="shrink-0 text-accent"
                  />

                  <span>
                    GitHub
                  </span>

                  <ExternalLink
                    size={14}
                    className="ml-auto shrink-0 opacity-40"
                  />
                </a>

              </div>

            </div>

          </Reveal>

        </section>

      </main>

      {/* ==========================================================
          FOOTER
      ========================================================== */}

      <footer className="footer border-t px-6 py-8 text-center text-xs">
        {t.footer}
      </footer>

    </div>
  );
}

/* ================================================================
   RENDER
================================================================ */

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);