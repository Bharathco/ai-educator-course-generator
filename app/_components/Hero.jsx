import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-24">
      <div className="mx-auto max-w-screen-xl px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          <span className="text-[#274DF0]">AI-Powered</span>{" "}
          <span className="text-gray-800">Personalized Learning Tools</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Unlock personalized education and practice with AI-driven tools
          tailored for{" "}
          <span className="font-semibold text-[#274DF0]">Educators</span>,{" "}
          <span className="font-semibold text-[#274DF0]">Students</span>, and{" "}
          <span className="font-semibold text-[#274DF0]">Job Seekers</span>.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Educator Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Educator Dashboard
            </h2>
            <p className="mt-3 text-gray-600">
              Design custom learning paths using Gen AI for your students.
            </p>
            <Link href="/dashboard">
              <Button className="mt-5 w-full">Get Started</Button>
            </Link>
          </div>

          {/* Student Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Student Dashboard
            </h2>
            <p className="mt-3 text-gray-600">
              Access personalized courses and track your academic progress.
            </p>
            <Link href="https://easy-study-inky.vercel.app/dashboard">
              <Button className="mt-5 w-full">Get Started</Button>
            </Link>
          </div>

          {/* Mock Interview */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-gray-900">Mock Interview</h2>
            <p className="mt-3 text-gray-600">
              Practice interviews with real-time AI feedback and improve
              confidently.
            </p>
            <Link href="https://ai-mock-interviews-nu.vercel.app/">
              <Button className="mt-5 w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
