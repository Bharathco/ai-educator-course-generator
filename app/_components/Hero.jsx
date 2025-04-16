import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:items-center">
        <h1 className="text-3xl text-[#B100FF] font-extrabold sm:text-5xl text-center">
          AI-Powered Personalized Learning tools
          <strong className="font-bold text-gray-950 text-5xl sm:block">
            {" "}
            Enhance Learning & Interview Prep
          </strong>
        </h1>
        <p className="mt-4 sm:text-xl/relaxed text-center">
          Unlock personalized education and practice with AI-driven tools for
          educators, students, and interviews.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Educator Dashboard */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Educator Dashboard
            </h2>
            <p className="mt-2 text-gray-600">
              Create custom learning paths using Gen AI.
            </p>
            <Link href={"/dashboard"}>
              <Button className="mt-4 ">Get Started</Button>
            </Link>
          </div>

          {/* Student Dashboard */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Student Dashboard
            </h2>
            <p className="mt-2 text-gray-600">
              Access personalized courses and track progress.
            </p>
            <Link href={"https://next-gen-smart-course-generator.vercel.app/dashboard"}>
              <Button className="mt-4">Get Started</Button>
            </Link>
          </div>

          {/* Mock Interview */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Mock Interview
            </h2>
            <p className="mt-2 text-gray-600">
              Prepare for interviews with AI-driven mock tests.
            </p>
            <Link
              href={
                "https://ai-mock-interviews-nu.vercel.app/"
              }
            >
              <Button className="mt-4">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
