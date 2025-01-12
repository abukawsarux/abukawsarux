"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

import CountUp from "../shared/CountUp";

const orbitron = Orbitron({ subsets: ["latin"] });

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const text = "Abu Kawsar".split(" ");

  return (
    <div className="pt-28 md:pt-44 pb-14 md:pb-32 bg-[#181818]">
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full max-w-screen-lg mx-auto">
              <motion.h2
                variants={variants}
                className="flex items-center justify-center md:justify-center text-xl md:text-3xl font-black text-white text-center "
              >
                <hr className="w-8 h-[2px] bg-black my-2 mr-2" />
                Hello, I’m 👋
              </motion.h2>
              <h1
                className={`mt-4 md:mt-10 text-[50px] md:text-[80px] font-extrabold text-white text-center  leading-tight tracking-normal ${orbitron.className}`}
              >
                {text.map((word, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: index / 10 }}
                    key={index}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                variants={variants}
                className="mt-5 text-md md:text-3xl font-semibold text-center  text-white"
              >
                <span className="text-primary">UI/UX Engineer</span>
              </motion.p>

              <motion.div
                variants={variants}
                className="flex items-baseline justify-center md:justify-center mt-8"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium text-black md:text-lg md:px-8 me-0 md:me-6 rounded-md max-w-56 mt-8 primary-gradient transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  Let’s Talk
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/portfolio"
                  className="flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium  md:text-lg md:px-8 me-0 md:me-6 rounded-md max-w-56 mt-8 border-1 border-primary text-primary bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  My Work
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
              <motion.div
                variants={variants}
                className="flex items-center justify-center gap-4  mt-6 md:mt-16 text-md md:text-3xl text-white"
              >
                <div
                  className={`text-3xl font-semibold w-12 ${orbitron.className}`}
                >
                  <CountUp start={1} end={11} duration={5} />
                </div>
                <p className="text-lg text-[#dbdbdb] ">Worldwide Client</p>
                <p className="text-lg text-[#dbdbdb] mx-2">|</p>
                <div className="flex items-center gap-2 md:gap-6">
                  <Link href="https://behance.net/abukawsarux" target="_blank">
                    <FaBehance className="text-[#dbdbdb] size-5 cursor-pointer hover:text-primary" />
                  </Link>

                  <Link href="https://dribbble.com/abukawsarux" target="_blank">
                    <FaDribbble className="text-[#dbdbdb] size-5 cursor-pointer hover:text-primary" />
                  </Link>

                  <Link href="https://github.com/abukawsarux" target="_blank">
                    <VscGithub className="text-[#dbdbdb] size-5 cursor-pointer hover:text-primary" />
                  </Link>

                  <Link
                    href="https://linkedin.com/in/abukawsarux/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-[#dbdbdb] size-5 cursor-pointer hover:text-primary" />
                  </Link>
                  <Link
                    href="https://facebook.com/abukawsarux/"
                    target="_blank"
                  >
                    <FaFacebookF className="text-[#dbdbdb] size-5 cursor-pointer hover:text-primary" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(HeroSection);
