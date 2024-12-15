"use client";
import React, { useState } from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { motion, useInView } from "framer-motion";

// Icons
import { CgWebsite } from "react-icons/cg";
import { TbApi } from "react-icons/tb";
import { LuDatabase, LuCloudCog } from "react-icons/lu";
import { MdOutlineDesignServices, MdOutlineAppShortcut } from "react-icons/md";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const specialties = [
  {
    icon: <CgWebsite className="size-10" />,
    title: "Web App Development",
  },
  {
    icon: <TbApi className="size-12" />,
    title: "API Design & Development",
  },
  {
    icon: <LuDatabase className="size-10" />,
    title: "Database Management",
  },
  {
    icon: <LuCloudCog className="size-16" />,
    title: "Cloud & Server Management",
  },
  {
    icon: <MdOutlineDesignServices className="size-10" />,
    title: "UI/UX Design & Development",
  },
  {
    icon: <MdOutlineAppShortcut className="size-10" />,
    title: "Mobile App Development",
  },
];

const MySpecialties = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initial active card is the first one
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="">
      <div className="container py-8 md:py-14">
        {/* Title Section */}
        <div className="flex flex-col justify-center text-white md:flex-row md:justify-between md:items-start gap-y-4 md:gap-y-0">
          <div className="w-[100%] md:w-[35%]">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2
                className={`text-4xl md:text-5xl text-center md:text-left ${orbitron.className}`}
              >
                My Specialties
              </h2>
            </ScrollMotionEffect>
          </div>

          <div className="w-[100%] md:w-[55%]">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <p className="text-lg text-center md:text-left">
                {`Crafting intuitive interfaces, combining creativity with
                data-driven insights, and excelling in wireframing, prototyping,
                and user research.`}
              </p>
            </ScrollMotionEffect>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="flex flex-col items-center justify-center mt-20 md:justify-between gap-x-4 md:items-start md:flex-row">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-[100%] md:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {specialties.map((el, index) => (
              <motion.div
                className={`bg-[#181818] rounded-lg w-full h-[200px] p-6 flex flex-col items-start transition-transform duration-500 ease-out ${
                  activeIndex === index
                    ? "primary-gradient scale-110 shadow-lg "
                    : "hover:scale-[1.05] hover:-translate-y-[4px] shadow-md"
                }`}
                key={index}
                variants={item}
                onMouseEnter={() => setActiveIndex(index)} // Set last hovered as active
              >
                <div
                  className={`flex items-center justify-center p-4 rounded-full w-14 h-14 ${
                    activeIndex === index
                      ? "bg-[#181818] text-primary scale-110 shadow-lg border "
                      : "hover:scale-[1.05] hover:-translate-y-[4px] shadow-md  bg-white text-black"
                  }`}
                >
                  {el?.icon}
                </div>
                <div className="mt-auto">
                  <div
                    className={`flex items-center justify-between  ${
                      activeIndex === index ? "" : "text-white"
                    }`}
                  >
                    <h2
                      className={`text-[15px] md:text-[20px] font-semibold ${orbitron.className}`}
                    >
                      {el.title}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Card */}
          <div className="w-[100%] md:w-[30%] mt-6 md:mt-0">
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <Link
                href="mailto:abukawsar47ak@gmail.com"
                target="_blank"
                className={`group rounded-lg  w-full h-[415px] p-6 flex flex-col bg-gradient-to-br bg-[#181818] mt-[-1px]   `}
              >
                <div className="flex items-center rounded-full">
                  <Image
                    src="/assets/home/abu-about.png"
                    alt="AR Sahak"
                    width={250}
                    height={250}
                    className="w-[200px] h-auto rounded-full group-hover:drop-shadow-[0_2px_2px_rgba(191,253,61,0.5)]transition-all duration-400"
                    priority
                  />
                </div>

                <div className="mt-auto">
                  <p className={`py-3 text-white ${orbitron.className}`}>
                    Let's Contact
                  </p>
                  <div className="flex items-center justify-between text-white">
                    <p className={`text-xl font-semibold text-primary }`}>
                      abukawsar47ak@gmail.com
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySpecialties;
