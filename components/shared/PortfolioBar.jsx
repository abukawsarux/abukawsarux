import React from "react";
import Image from "next/image";

import CountUp from "./CountUp";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const PortfolioBar = () => {
  return (
    <ScrollMotionEffect effect="fade-up" duration="2000">
      <div className="bg-[#181818]">
        <div className="container py-8">
          <div className=" ">
            <ul className="grid grid-cols-2 lg:grid-cols-4 justify-between items-end gap-7 w-full">
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
          </div>
        </div>
      </div>
    </ScrollMotionEffect>
  );
};

export default PortfolioBar;
