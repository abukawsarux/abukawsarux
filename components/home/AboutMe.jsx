import React from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });

const AboutMe = () => {
  return (
    <section className="py-1 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row gap-x-10 gap-y-6">
          <div className="w-[100%] md:w-[40%]">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="">
                <div className="flex items-center justify-center ">
                  <div className="  ">
                    <Image
                      width={800}
                      height={1050}
                      src="/assets/home/abu-hero.png"
                      alt="AR Sahak"
                      className=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="w-[100%] md:w-[60%] md:mt-0 ">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <h2
                className={`text-white text-4xl md:text-5xl mb-10 text-center md:text-left  font-semibold ${orbitron.className} `}
              >
                About Me
              </h2>
              <p className="mb-6 text-base text-center text-white md:text-lg md:text-left">
                {`I’m AR Sahak, a passionate Full Stack Developer focused on creating seamless and innovative web experiences. I graduated from Jiangsu University of Science and Technology, China, and currently work at Bayshore Communication in Dhaka, Bangladesh. I specialize in building responsive front-end interfaces using React and Next Js, and developing robust back-end systems with Node.js and Express. I am experienced in managing databases like MySQL, PostgreSQL, and MongoDB.`}
              </p>
              <p className="text-base text-center text-white md:text-lg md:text-left">
                {`I am skilled in designing RESTful APIs, implementing microservices, and deploying applications on AWS and Azure. I thrive in Agile environments, using Git for version control, and continually learning new technologies to deliver high-performance, secure, and user-friendly applications.`}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href={"/assets/AbuKawsar_UIUX_Engineer.pdf"}
                  target="_blank"
                  className="flex items-center justify-center px-2 py-2.5 mb-2 text-sm font-medium text-black md:text-lg md:px-8 me-0 md:me-6 rounded-md max-w-56 mt-8 primary-gradient transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  View Resume
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-2 text-black size-4 md:size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
