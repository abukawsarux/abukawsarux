"use client";
import React, { useState } from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const orbitron = Orbitron({ subsets: ["latin"] });

const courses = [
  {
    imgUrl: "/assets/about/bayshore.jpg",
    companyName: "Bayshore",
    position: "Software Engineer",
    jobType: "Full-Time",
    jobDuration: "Jun 2024 - Present",
    description:
      "Working at Bayshore Communication as a Full Stack Developer has been rewarding. I’ve grown through diverse projects, improving my skills in web development, database management, and cloud services.",
  },
  {
    imgUrl: "/assets/about/itbangla.jpeg",
    companyName: "IT Bangla Ltd",
    position: "Software Engineer",
    jobType: "Full-Time",
    jobDuration: "Jun 2022 - Dec 2023",
    description:
      "This was my first job as a Software Engineer, which I started in January 2022 as a Full Stack Developer. It has been a rewarding experience, allowing me to grow through diverse projects and enhance.",
  },
];

const MyCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active card, default is the first card

  return (
    <section className=" py-6 md:py-16">
      <div className="container">
        <div className="flex flex-col justify-center text-white md:flex-row md:justify-between md:items-start gap-y-4">
          <div className="w-full md:w-[40%]">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2
                className={`text-4xl md:text-5xl text-center md:text-left ${orbitron.className}`}
              >
                My Courses
              </h2>
            </ScrollMotionEffect>
          </div>

          <div className="w-full md:w-[55%]">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <p className="text-lg text-center md:text-left">
                Synergistically seize front-end methods of empowerment without
                extensive core competencies. Progressively repurpose alternative
                platforms.
              </p>
            </ScrollMotionEffect>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          {courses?.map((el, index) => (
            <div
              key={index}
              className={`group p-10 flex md:flex-row flex-col items-center justify-between my-4 rounded-2xl transition-bg duration-400 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#BFFD3D] to-[#7CE495] text-black"
                  : "bg-[#2c2c2c] text-gray-300"
              }`}
              onMouseEnter={() => setActiveIndex(index)} // Set the hovered card as active
            >
              <div className="w-full md:w-[15%] mx-0">
                <Image
                  src={el?.imgUrl}
                  alt={el?.companyName}
                  width={200}
                  height={200}
                  className="size-16 lg:size-20 2xl:size-24 h-auto  rounded-full"
                  priority
                />
              </div>
              <div className="mt-3 md:mt-0 w-full md:w-[25%]">
                <h2
                  className={`text-2xl font-semibold ${
                    activeIndex === index ? "text-black" : "text-white"
                  } group-hover:text-black mb-2`}
                >
                  {el?.companyName}
                </h2>
                <p
                  className={`${
                    activeIndex === index ? "text-gray-800" : "text-gray-300"
                  } group-hover:text-gray-800`}
                >
                  {el?.position}
                </p>
              </div>
              <div className="mt-3 md:mt-0 w-full md:w-[25%]">
                <h2
                  className={`text-2xl font-semibold ${
                    activeIndex === index ? "text-black" : "text-white"
                  } group-hover:text-black mb-2`}
                >
                  {el?.jobType}
                </h2>
                <p
                  className={`${
                    activeIndex === index ? "text-gray-800" : "text-gray-300"
                  } group-hover:text-gray-800`}
                >
                  {el?.jobDuration}
                </p>
              </div>
              <div className="mt-3 md:mt-0 w-full md:w-[40%]">
                <p
                  className={`${
                    activeIndex === index ? "text-gray-800" : "text-gray-300"
                  } group-hover:text-gray-800`}
                >
                  {el?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCourses;
