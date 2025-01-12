import React from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import CountUp from "../shared/CountUp";

const orbitron = Orbitron({ subsets: ["latin"] });

const AboutMePage = () => {
  return (
    <section className="pt-10 pb-6  md:pt-20 md:pb-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row gap-x-10">
          <div className="w-[100%] md:w-[40%]">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="hidden md:block">
                <div className="flex items-center justify-center relative">
                  {/* Sun-like blurred background */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#BFFD3D] to-[#7CE495] blur-[100px] opacity-50"></div>
                  </div>

                  {/* Foreground content */}
                  <div className=" z-50">
                    <Image
                      width={800}
                      height={1050}
                      src="/assets/home/abu-hero.png"
                      alt="Abu Kawsar"
                      className="w-[480px] h-auto mx-auto  inset-0  "
                      priority
                    />
                  </div>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="w-[100%] md:w-[60%] md:mt-0 mt-10">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <h2
                className={`text-white text-4xl md:text-5xl mb-10 text-center md:text-left  font-semibold ${orbitron.className} `}
              >
                About Me
              </h2>
              <p className="mb-6 text-base text-center text-white md:text-lg md:text-left">
                {`I’m Abu Kawsar, a skilled UI/UX Designer and Frontend Developer with 2 years of experience creating intuitive and visually appealing digital experiences. I specialize in crafting user-friendly designs using tools like Figma transforming them into responsive, high-performance web interfaces using modern technologies like React, Next.js, and Tailwind CSS.`}
              </p>
              <p className="text-base text-center text-white md:text-lg md:text-left">
                {`I have a strong passion for merging creativity with functionality, ensuring every project not only looks great but also delivers a seamless user experience. My goal is to continuously innovate and bring impactful solutions to life.`}
              </p>
            </ScrollMotionEffect>
          </div>
        </div>
        <div className="mt-12 md:mt-20">
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <ul className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-7 w-full">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <Image
                      src={"/assets/about/tabler_stars.png"}
                      alt="User Icon"
                      width={80}
                      height={80}
                      className="w-[45px] md:w-[80px] h-auto  pr-3  border-r-2 border-primary"
                      priority
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-extrabold text-white truncate md:text-4xl">
                      <CountUp start={1} end={3} duration={3} delay={0} />
                    </p>
                    <p className="text-xs text-white truncate md:text-lg">
                      Years of experience
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <Image
                      src={"/assets/about/oui_security-signal-resolved.png"}
                      alt="User Icon"
                      width={50}
                      height={50}
                      className="w-[50px] md:w-[80px] h-auto  pr-3  border-r-2 border-primary"
                      priority
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-2xl font-extrabold text-white truncate md:text-4xl">
                      <CountUp start={1} end={45} duration={3} delay={0} />
                    </p>
                    <p className="text-sm text-white truncate md:text-lg">
                      Problem Solved
                    </p>
                  </div>
                </div>
              </li>

              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <Image
                      src={"/assets/about/majesticons_users-line.png"}
                      alt="User Icon"
                      width={80}
                      height={80}
                      className="w-[50px] md:w-[80px] h-auto  pr-3  border-r-2 border-primary"
                      priority
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-2xl font-extrabold text-white truncate md:text-4xl">
                      <CountUp start={1} end={120} duration={3} delay={0} />
                    </p>
                    <p className="text-sm text-white truncate md:text-lg">
                      Global Clients
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <Image
                      src={"/assets/about/mdi_trophy-award.png"}
                      alt="User Icon"
                      width={50}
                      height={50}
                      className="w-[50px] md:w-[80px] h-auto  pr-3  border-r-2 border-primary"
                      priority
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-2xl font-extrabold text-white truncate md:text-4xl">
                      <CountUp start={1} end={6} duration={3} delay={0} />
                    </p>
                    <p className="text-sm text-white truncate md:text-lg">
                      Global Award Win
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
