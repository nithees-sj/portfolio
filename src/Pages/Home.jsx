import React from "react";
import profileImg from "../assets/Formal.png";

function Home() {
  return (
    <div className="hero relative z-0 flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-10 sm:pt-32 sm:pb-12">
        {/* Animated background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="blob blue-1 b1"></div>
          <div className="blob blue-2 b2"></div>
          <div className="blob gray b3"></div>
        </div>

        {/* Main Grid */}
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="mb-3 text-3xl sm:mb-4 sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Nithees SJ
              </span>
            </h1>

            <p className="mb-1 text-base sm:text-lg lg:text-2xl font-medium text-gray-600">
              Student at Kongu Engineering College, Perundurai
            </p>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg lg:text-2xl font-medium text-gray-600">
              AIML – UG
            </p>

            {/* Short intro for mobile */}
            <p className="mb-6 max-w-xl text-sm sm:text-base text-gray-500 lg:text-gray-600 mx-auto lg:mx-0">
              I love turning data into insights and ideas into polished digital
              experiences — with a focus on clean design, clear logic, and real impact.
            </p>

            {/* Buttons */}
            <div className="mt-3 sm:mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
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
                  className="rounded-lg bg-white px-5 py-2.5 text-sm sm:text-base font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-800 hover:shadow-md"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-5">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {["🌐 HTML", "🎨 CSS", "🟨 JS", "🌬️ Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {["⚛️ React", "🟢 Node", "🍃 MongoDB", "🐧 Linux"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="mt-7 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {["🎯 Problem Solver", "🚀 Fast Learner", "💡 Creative Thinker"].map(
                (fact) => (
                  <div
                    key={fact}
                    className="flex h-11 sm:h-12 w-40 sm:w-44 items-center justify-center rounded-xl bg-gray-50 px-3 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    {fact}
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT CONTENT – IMAGE */}
          <div className="relative mt-6 sm:mt-0 flex items-center justify-center">
            <div className="relative h-[220px] w-[170px] sm:h-[260px] sm:w-[210px] lg:h-[420px] lg:w-[320px] overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-white shadow-2xl transition hover:-translate-y-1">
              <img
                src={profileImg}
                alt="Nithees SJ"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Floating Cards */}
            <div className="float-card fc-top hidden xs:flex sm:flex">✨ Data Analyst</div>
            <div className="float-card fc-bottom hidden xs:flex sm:flex">🔧 Problem Solver</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
