"use client";
import React, { useState } from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const orbitron = Orbitron({ subsets: ["latin"] });

const workExperience = [
  {
    imgUrl: "/assets/about/just.png",
    instituteName: "Jiangsu University of Science and Technology",
    degree: "BSc in CSE",
    CGPA: "3.03 (out of 4)",
    session: "Sep 2018 - Jul 2022",
    description:
      "During my time at Jiangsu University of Science and Technology, I honed my skills in computer science, embraced new technologies, and collaborated on projects that enhanced my practical and theoretical knowledge.",
  },
  {
    imgUrl: "/assets/about/dpi.png",
    instituteName: "Dinajpur Polytechnic Institute",
    degree: "Diploma in CE",
    CGPA: "3.46 (out of 4)",
    session: "June 2014 - Jul 2018",
    description:
      "I pursued a Diploma in Computer Engineering at Dinajpur Polytechnic Institute from June 2014 to July 2018. During this time, I developed strong technical skills and a deep understanding of computer systems and programming.",
  },
];

const MyEducation = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active card

  return (
    <section className="bg-[#181818] py-6 md:py-16">
      <div className="container">
        <div className="flex flex-col justify-center text-white md:flex-row md:justify-between md:items-start gap-y-4">
          <div className="w-full md:w-[40%]">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2
                className={`text-4xl md:text-5xl text-center md:text-left ${orbitron.className}`}
              >
                My Education
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
          {workExperience?.map((el, index) => (
            <div
              key={index}
              className={`p-10 flex md:flex-row flex-col items-center justify-between my-4 rounded-2xl transition-bg duration-400 ${
                activeIndex === index
                  ? "primary-gradient text-black"
                  : "bg-[#2c2c2c] text-gray-300"
              }`}
              onMouseEnter={() => setActiveIndex(index)} // Set the hovered card as active
            >
              <div className="w-full md:w-[15%] mx-0 mt-3 md:mt-0">
                <Image
                  src={el?.imgUrl}
                  alt={el?.instituteName}
                  width={200}
                  height={200}
                  className="size-16 lg:size-20 2xl:size-24 h-auto  rounded-full"
                  priority
                />
              </div>
              <div className="w-full md:w-[25%] mt-3 md:mt-0">
                <h2
                  className={`text-2xl font-semibold ${
                    activeIndex === index ? "text-black" : "text-white"
                  }`}
                >
                  {el?.degree}
                </h2>
                <p
                  className={`${
                    activeIndex === index ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {el?.instituteName}
                </p>
              </div>
              <div className="w-full md:w-[25%] mt-3 md:mt-0">
                <h2
                  className={`text-2xl font-semibold ${
                    activeIndex === index ? "text-black" : "text-white"
                  }`}
                >
                  {el?.CGPA}
                </h2>
                <p
                  className={`${
                    activeIndex === index ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {el?.session}
                </p>
              </div>
              <div className="w-full md:w-[40%] mt-3 md:mt-0">
                <p
                  className={`${
                    activeIndex === index ? "text-gray-800" : "text-gray-300"
                  }`}
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

export default MyEducation;
