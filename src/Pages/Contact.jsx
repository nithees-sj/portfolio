import React, { useState, useEffect } from "react";

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 py-10 contact-page pt-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background grid + spotlight */}
      <div className="pointer-events-none absolute inset-0 z-0"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Page Title */}
        <h1 className="mb-4 text-center text-5xl font-extrabold text-gray-900 animate-fade-in">
          Get In Touch
        </h1>

        {/* Hero Intro */}
        <section className="my-12 text-center animate-fade-in-delay-1">
          <h2 className="mb-5 text-3xl font-bold text-gray-900">
            Let's Build Something Amazing Together
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-500">
            I'm always excited to connect with fellow developers, potential
            collaborators, and anyone interested in technology. Whether you
            have a project idea, want to discuss AI/ML, or just want to say
            hello, I'd love to hear from you!
          </p>
        </section>

        {/* Contact Methods */}
        <section className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-delay-2">
          {[
            {
              icon: "📧",
              title: "Email",
              value: "nitheessj@gmail.com",
              desc: "Best for detailed discussions and project inquiries",
              link: "mailto:nitheessj@gmail.com",
            },
            {
              icon: "💼",
              title: "LinkedIn",
              value: "nithees-sj",
              desc: "Connect with me and my updates",
              link: "https://www.linkedin.com/in/nithees-s-j-524262366/",
            },
            {
              icon: "💻",
              title: "GitHub",
              value: "nithees-sj",
              desc: "Check out my projects and contributions",
              link: "https://github.com/nithees-sj",
            },
          ].map((c, idx) => (
            <a
              key={c.title}
              href={c.link}
              {...(c.title !== "Email" && { target: "_blank", rel: "noopener noreferrer" })}
              onMouseEnter={() => setHoveredCard(c.title)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300 animate-slide-up"
            >
              <span className={`mb-4 block text-5xl transition-transform duration-300 ${hoveredCard === c.title ? 'scale-125' : 'scale-100'}`}>{c.icon}</span>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {c.title}
              </h3>
              <p className="mb-2 text-gray-600">{c.value}</p>
              <p className="text-sm italic text-gray-400">{c.desc}</p>

              <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-gray-900 to-gray-700 transition group-hover:scale-x-100"></span>
            </a>
          ))}
        </section>

        {/* About Section */}
        <section className="my-16 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 py-12 animate-fade-in-delay-3">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            A Bit About Me
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎓",
                title: "Student & Learner",
                desc: "Currently pursuing AIML at Kongu Engineering College, always eager to learn new technologies.",
              },
              {
                icon: "🚀",
                title: "Full-Stack Developer",
                desc: "Passionate about building end-to-end applications using modern web technologies.",
              },
              {
                icon: "🤖",
                title: "AI/ML Enthusiast",
                desc: "Fascinated by artificial intelligence and machine learning applications.",
              },
            ].map((a, idx) => (
              <div
                key={a.title}
                style={{ transitionDelay: `${idx * 0.1}s` }}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 animate-slide-up"
              >
                <span className="mb-4 block text-4xl transition-transform duration-300 hover:scale-125">{a.icon}</span>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="my-16 text-center animate-fade-in-delay-4">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            What I'm Working On
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Web Development",
              "Machine Learning",
              "Data Analysis",
              "React Projects",
              "Node.js",
              "MongoDB",
              "Python",
              "Linux",
            ].map((tag, idx) => (
              <span
                key={tag}
                style={{ transitionDelay: `${idx * 0.05}s` }}
                className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:text-white hover:shadow-lg hover:border-gray-800 animate-slide-up"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-14 text-center transition hover:shadow-2xl animate-fade-in-delay-5">
          <h2 className="mb-4 text-3xl font-extrabold text-white">
            Ready to Collaborate?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href="mailto:nitheessj@gmail.com?subject=Connect with Nithees S J"
            className="inline-block rounded-lg border border-white bg-white px-8 py-3 text-base font-semibold text-gray-900 transition hover:-translate-y-1 hover:bg-transparent hover:text-white hover:shadow-xl"
          >
            Get In Touch
          </a>
        </section>
      </div>

      {/* ===== Background animations ===== */}
      <style jsx>{`
        .contact-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(17,24,39,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,24,39,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.35;
          z-index: 0;
        }

        .contact-page::after {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(600px 600px at var(--x, 20%) var(--y, 30%),
              rgba(37,99,235,0.1), transparent 60%),
            radial-gradient(800px 800px at calc(100% - var(--x, 20%)) calc(100% - var(--y, 30%)),
              rgba(2,132,199,0.08), transparent 65%);
          filter: blur(20px);
          animation: spot 50s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes spot {
          0%   { --x: 18%; --y: 30%; }
          50%  { --x: 75%; --y: 70%; }
          100% { --x: 18%; --y: 30%; }
        }

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

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-5 {
          animation: fade-in 0.8s ease-out 1s forwards;
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

export default Contact;
