import React, { useState, useEffect } from "react";

function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Career Developer + Doubt Solver Pro",
      description:
        "Combines both career and learning features with comprehensive tools for students and professionals.",
      features: [
        "Resume builder",
        "Roadmap designer",
        "Project ideas generator",
        "Skill guidance for specific roles",
        "Doubt solver with multi-format support",
        "Summarizer and quiz generator",
        "Video upload and quiz generation for teachers",
      ],
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "AI/ML",
        "PDF Processing",
        "Video Processing",
      ],
      status: "Completed",
      codeUrl: "https://github.com/nithees-sj/novard-ai/",
    },
    {
      id: 2,
      title: "Spell Checker & Sentence Corrector using TRIE",
      description:
        "A console-based application that uses the TRIE data structure to detect and correct spelling mistakes in words and sentences, with secure user login authentication.",
      features: [
        "TRIE-based dictionary for fast word lookup",
        "User login and authentication system",
        "Detection of incorrect spellings",
        "Word-level spelling correction suggestions",
        "Sentence-level spelling correction",
        "Efficient prefix-based search using TRIE",
        "Console-based interactive interface"
      ],
      tech: [
        "Data Structures",
        "TRIE",
        "Console Application",
        "Authentication",
        "Algorithms"
      ],
      status: "Completed",
      codeUrl: "https://github.com/nithees-sj/spell-checker-trie"
    },
    {
    id: 3,
    title: "Amazon Prime Movies & TV Shows Analysis",
    description:
          "A data analytics project using Power BI to analyze movies and TV shows available on Amazon Prime Video, focusing on content trends, genres, ratings, and release patterns.",
  features: [
    "Interactive Power BI dashboard",
    "Genre-wise analysis of movies and TV shows",
    "Year-wise content release trends",
    "Movies vs TV shows comparison",
    "Country-wise content distribution",
    "Rating and duration analysis",
    "User-friendly visual insights for decision making"
  ],
  tech: [
    "Power BI",
    "Data Visualization",
    "Data Cleaning",
    "Data Analysis",
    "Excel / CSV Dataset",
    "Business Intelligence"
  ],
  status: "Completed",
  category: "Data Analytics & Visualization",
  codeUrl: "https://app.powerbi.com/groups/me/reports/86470ac1-ca67-436d-8237-a72b274c4847/fece990eb8d0975a7e45?experience=power-bi"
}
];

  const projectStats = [
    { label: "Projects Completed", value: "3", icon: "✅" },
    { label: "Technologies Used", value: "10+", icon: "⚡" },
    { label: "AI Integration", value: "100%", icon: "🤖" },
    { label: "User Focused", value: "100%", icon: "👥" },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white to-gray-50 py-10 pt-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* HERO */}
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 animate-fade-in">
            My Projects
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500 animate-fade-in-delay-1">
            Building innovative solutions that bridge the gap between technology
            and career development
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectStats.map((stat, idx) => (
              <div
                key={stat.label}
                style={{ transitionDelay: `${idx * 0.1}s` }}
                className="rounded-xl bg-white p-5 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg animate-slide-up"
              >
                <div className="mb-2 text-2xl">{stat.icon}</div>
                <div className="text-xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid items-center gap-12 lg:grid-cols-2 transition-all duration-700 ${
                index % 2 !== 0 ? "lg:[direction:rtl]" : ""
              } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* CONTENT */}
              <div className="rounded-2xl bg-white p-8 shadow-xl lg:[direction:ltr] transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-4 flex items-center justify-end">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {project.status}
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-extrabold text-gray-900">
                  {project.title}
                </h2>
                <p className="mb-6 text-gray-600">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="mb-2 font-bold text-gray-900">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="relative pl-5 text-sm text-gray-700 before:absolute before:left-0 before:content-['✓'] before:text-emerald-500"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 font-bold text-gray-900">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 text-xs font-semibold text-gray-900 border border-gray-200 transition hover:border-gray-400 hover:bg-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white hover:shadow-lg"
                  >
                    View work
                  </a>
                </div>
              </div>

              {/* MOCKUP */}
              <div className="flex justify-center">
                <div className="h-[200px] w-[300px] overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition hover:shadow-xl">
                  <div className="flex items-center gap-2 bg-gray-300 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-red-400"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  </div>
                  <div className="space-y-3 p-4 animate-pulse">
                    <div className="h-2 rounded bg-gray-300"></div>
                    <div className="h-2 w-3/5 rounded bg-gray-300"></div>
                    <div className="h-2 w-4/5 rounded bg-gray-300"></div>
                    <div className="mt-4 flex gap-2">
                      <div className="h-6 w-14 rounded bg-gray-600"></div>
                      <div className="h-6 w-14 rounded bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* HIGHLIGHTS */}
        <section className="my-20">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 animate-fade-in">
            Project Highlights
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🎯", "Problem Solving", "Real-world career challenges"],
              ["🤖", "AI Integration", "Smart & intelligent solutions"],
              ["👥", "User-Centric", "Focused on usability"],
              ["📈", "Scalable", "Built for growth"],
            ].map(([icon, title, desc], idx) => (
              <div
                key={title}
                className="rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 text-3xl transition-transform duration-300 hover:scale-125">{icon}</div>
                <h3 className="mb-2 font-bold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 rounded-2xl bg-gray-900 p-12 text-center text-white transition hover:shadow-2xl">
          <h2 className="mb-3 text-3xl font-extrabold">
            Interested in Collaborating?
          </h2>
          <p className="mb-6 text-gray-300">
            Let's work together to build something amazing!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nitheessj@gmail.com?subject=Connect with Nithees S J"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-50"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/nithees-sj"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-gray-900"
            >
              View GitHub
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Projects;
