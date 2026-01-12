import React, { useState, useEffect } from "react";

function About() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll("[data-observe]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 py-10 rings pt-24">
      {/* Blobs */}
      <div className="about-blob blue b1"></div>
      <div className="about-blob cyan b2"></div>
      <div className="about-blob gray b3"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h1 className="mb-8 text-center text-5xl font-extrabold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in">
          About Me
        </h1>

        {/* Intro */}
        <div data-observe id="intro" className={`mb-8 rounded-2xl bg-white p-10 shadow-xl transition-all duration-700 ${visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="mb-3 leading-relaxed text-gray-700">
            I'm a passionate student pursuing Artificial Intelligence and Machine
            Learning at Kongu Engineering College, Perundurai. I love building
            full-stack applications and solving complex problems through
            technology.
          </p>
          <p className="leading-relaxed text-gray-700">
            My journey in technology started with web development, and I've since
            expanded into machine learning, data analysis, and software
            engineering. I believe in continuous learning and staying updated
            with the latest technologies.
          </p>
        </div>

        {/* Skills */}
        <section className="my-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 animate-fade-in">
            My Skills & Technologies
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Front End", ["HTML", "CSS", "JavaScript", "Tailwind CSS"]],
              ["Frameworks & Libraries", ["React", "Node.js", "Express.js"]],
              ["Back End & Database", ["MongoDB", "MySQL"]],
              ["Programming Languages", ["Python", "Java", "C"]],
              ["Tools", ["Git", "Figma", "PowerBI"]],
              ["Operating Systems", ["Linux"]],
            ].map(([title, items], idx) => (
              <div
                key={title}
                data-observe
                id={`skill-${idx}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
                className={`rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300 ${
                  visibleSections[`skill-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
                  {title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {items.map((item, itemIdx) => (
                    <span
                      key={item}
                      style={{ transitionDelay: `${itemIdx * 0.05}s` }}
                      className="rounded-full bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="my-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 animate-fade-in">
            Education & Journey
          </h2>

          <div className="relative pl-12">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-gray-400 to-gray-200"></div>

            {[
              [
                "Bachelor of Technology - AIML",
                "Kongu Engineering College, Perundurai",
                "Currently pursuing Artificial Intelligence and Machine Learning, focusing on cutting-edge technologies and practical applications.",
              ],
              [
                "Web Development Journey",
                "Self-Taught & Online Learning",
                "Started learning web development through online platforms, building projects and continuously improving my skills.",
              ],
              [
                "Problem Solving & Coding",
                "Competitive Programming & LeetCode",
                "Regularly solving coding challenges to enhance algorithmic thinking.",
              ],
            ].map(([title, sub, desc], i) => (
              <div 
                key={i} 
                data-observe 
                id={`timeline-${i}`}
                className={`relative mb-8 transition-all duration-700 ${
                  visibleSections[`timeline-${i}`] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="absolute left-2 top-3 h-4 w-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 ring-4 ring-white shadow-lg"></div>
                <div className="rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200">
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{sub}</p>
                  <p className="mt-2 text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="my-16">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 animate-fade-in">
            What I Love Doing
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              ["💻", "Coding", "Building applications and solving problems."],
              ["🤖", "AI/ML Research", "Exploring intelligent algorithms."],
              ["📊", "Data Analysis", "Extracting insights from data."],
            ].map(([icon, title, desc], idx) => (
              <div
                key={title}
                data-observe
                id={`interest-${idx}`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
                className={`flex h-60 w-60 flex-col items-center justify-center rounded-xl bg-white p-5 text-center shadow-xl transition-all duration-700 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300 ${
                  visibleSections[`interest-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="mb-3 text-4xl transition-transform duration-300 hover:scale-125">{icon}</div>
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="my-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 py-10">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 animate-fade-in">
            My Goals & Aspirations
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              ["🚀", "Full-Stack Developer", "Build complete applications"],
              ["🧠", "AI/ML Specialist", "Master intelligent systems"],
              ["🌍", "Global Impact", "Solve real-world problems"],
            ].map(([icon, title, desc], idx) => (
              <div
                key={title}
                data-observe
                id={`goal-${idx}`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
                className={`flex h-60 w-60 flex-col items-center justify-center rounded-xl bg-white p-5 text-center shadow-xl transition-all duration-700 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300 ${
                  visibleSections[`goal-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="mb-3 text-4xl transition-transform duration-300 hover:scale-125">{icon}</div>
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Custom animations & blobs */}
      <style jsx>{`
        .rings::before {
          content: "";
          position: absolute;
          inset: -18%;
          background:
            radial-gradient(900px 900px at 15% 20%, rgba(37,99,235,0.06), transparent 65%),
            radial-gradient(800px 800px at 85% 70%, rgba(17,24,39,0.06), transparent 65%);
          filter: blur(20px);
          z-index: 0;
        }

        .rings::after {
          content: "";
          position: absolute;
          inset: -12%;
          background: repeating-conic-gradient(
            from 0deg,
            rgba(2,132,199,0.05) 0deg 12deg,
            rgba(99,102,241,0.05) 12deg 24deg
          );
          mask: radial-gradient(circle, white 60%, transparent 72%);
          animation: spin 100s linear infinite;
          z-index: 0;
        }

        .about-blob {
          position: absolute;
          width: 40vmax;
          height: 40vmax;
          border-radius: 50%;
          filter: blur(42px);
          opacity: 0.16;
          z-index: 0;
        }

        .blue { background: radial-gradient(circle, rgba(37,99,235,.12), transparent); }
        .cyan { background: radial-gradient(circle, rgba(2,132,199,.12), transparent); }
        .gray { background: radial-gradient(circle, rgba(17,24,39,.1), transparent); }

        .b1 { top: -12%; left: -10%; animation: float1 60s infinite alternate; }
        .b2 { bottom: -16%; right: -12%; animation: float2 66s infinite alternate; }
        .b3 { top: 30%; left: 55%; animation: float3 72s infinite alternate; }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float1 { to { transform: translate(8%,6%); } }
        @keyframes float2 { to { transform: translate(-10%,-8%); } }
        @keyframes float3 { to { transform: translate(4%,-6%); } }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default About;
