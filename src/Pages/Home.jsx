import React from "react";
import profileImg from "../assets/Formal.png";

function Home() {
  return (
    <div className="fixed inset-0 z-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 hero">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-8 margin-fixer">

        {/* Animated background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="blob blue-1 b1"></div>
          <div className="blob blue-2 b2"></div>
          <div className="blob gray b3"></div>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center justify-items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] hero-grid">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center hero-copy">
            <h1 className="mb-4 text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Hi, I'm{" "}
              <span className="bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Nithees SJ
              </span>
            </h1>

            <p className="mb-2 text-2xl font-medium text-gray-600">
              Student at Kongu Engineering College, Perundurai
            </p>
            <p className="mb-6 text-2xl font-medium text-gray-600">
              AIML-UG
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                ["LinkedIn", "https://www.linkedin.com/in/nithees-s-j-524262366/"],
                ["GitHub", "https://github.com/nithees-sj"],
                ["LeetCode", "https://leetcode.com/u/nithees-sj/"],
                ["Kaggle", "https://www.kaggle.com/nitheessj"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-800 hover:shadow"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Tech badges */}
            <div className="mt-10 flex flex-col gap-6">
              <div className="flex flex-wrap justify-center gap-6">
                {["🌐 HTML", "🎨 CSS", "🟨 JS", "🌬️ Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {["⚛️ React", "🟢 Node", "🍃 MongoDB", "🐧 Linux"].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["🎯 Problem Solver", "🚀 Fast Learner", "💡 Creative Thinker"].map(
                (fact) => (
                  <div
                    key={fact}
                    className="flex h-12 w-40 items-center justify-center gap-1 rounded-xl bg-gray-50 px-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    {fact}
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex items-center justify-center hero-visual">
            <div className="relative h-[480px] w-[380px] overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-white shadow-2xl transition hover:-translate-y-1 hover:shadow-3xl portrait">
              <img
                src={profileImg}
                alt="Nithees SJ"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="float-card fc-top">✨ Data Analyst</div>
            <div className="float-card fc-bottom">🔧 Problem Solver</div>
          </div>
        </div>
      </div>

      {/* ===== Custom animations & blobs ===== */}
      <style jsx>{`
        .hero::before {
          content: "";
          position: absolute;
          inset: -20%;
          background: conic-gradient(
            from 0deg,
            rgba(37,99,235,0.06),
            rgba(99,102,241,0.04),
            rgba(2,132,199,0.04),
            rgba(17,24,39,0.05),
            rgba(37,99,235,0.06)
          );
          filter: blur(30px);
          animation: rotate-wash 60s linear infinite;
        }

        .blob {
          position: absolute;
          width: 38vmax;
          height: 38vmax;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.18;
        }

        .blue-1 {
          background: radial-gradient(circle, rgba(37,99,235,0.12), transparent);
        }
        .blue-2 {
          background: radial-gradient(circle, rgba(2,132,199,0.12), transparent);
        }
        .gray {
          background: radial-gradient(circle, rgba(17,24,39,0.1), transparent);
        }

        .b1 {
          top: -10%;
          left: -10%;
          animation: blob1 50s infinite alternate;
        }
        .b2 {
          bottom: -15%;
          right: -15%;
          animation: blob2 55s infinite alternate;
        }
        .b3 {
          top: 30%;
          left: 55%;
          animation: blob3 60s infinite alternate;
        }

        .float-card {
          position: absolute;
          background: white;
          border: 2px solid #e5e7eb;
          padding: 10px 14px;
          border-radius: 16px;
          font-weight: 700;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .fc-top {
          top: -15px;
          right: -15px;
        }
        .fc-bottom {
          bottom: -15px;
          left: -15px;
          animation-delay: 1.5s;
        }

        @keyframes rotate-wash {
          to {
            transform: rotate(360deg) scale(1.05);
          }
        }
        @keyframes float {
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes blob1 {
          to {
            transform: translate(10%, 6%) rotate(20deg);
          }
        }
        @keyframes blob2 {
          to {
            transform: translate(-8%, -10%) rotate(-20deg);
          }
        }
        @keyframes blob3 {
          to {
            transform: translate(4%, -6%) rotate(24deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;