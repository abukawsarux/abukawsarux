import React from "react";

import { Orbitron } from "next/font/google";

import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const orbitron = Orbitron({ subsets: ["latin"] });

const ContactSection = () => {
  return (
    <section className="pt-32 bg-black overflow-hidden">
      <div className="container py-10">
        <div className="flex flex-col justify-center text-white md:flex-row md:justify-between md:items-start gap-y-4 md:gap-y-0">
          <div className="w-[100%] md:w-[35%]">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2
                className={` text-4xl md:text-5xl text-center md:text-left ${orbitron.className}`}
              >
                Get In Touch
              </h2>
            </ScrollMotionEffect>
          </div>

          <div className="w-[100%] md:w-[55%]">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <p className="text-lg text-center md:text-left">
                {`Connect with Me Reach out for collaborations, inquiries, or
                just to chat about technology and development. I’d love to hear
                from you!`}
              </p>
            </ScrollMotionEffect>
          </div>
        </div>

        <div className="grid items-start justify-between grid-cols-1 mt-12 lg:grid-cols-3 md:gap-x-10 gap-x-0 md:mt-20">
          <div className="bg-[#2c2c2c] p-6 rounded-2xl gap-y-14">
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <h2 class="text-2xl font-semibold text-white py-6 border-b-1 border-[#414141]">
                Contact Details
              </h2>
              <ul class=" text-white list-none list-inside">
                <li className="py-6 lg:py-10  border-[#414141] border-b-1">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <IoLocationSharp className="text-primary size-7" />
                    </span>
                    <h5 className="text-2xl font-semibold text-white">Email</h5>
                  </div>
                  <h5 className="mt-5 text-xl font-normal text-white">
                    abukawsar47ak@gmail.com
                  </h5>
                </li>
                <li className="py-6 lg:py-10  border-[#414141] border-b-1">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <FaPhoneAlt className="text-primary size-6" />
                    </span>
                    <h5 className="text-2xl font-semibold text-white">
                      Contact
                    </h5>
                  </div>
                  <h5 className="mt-5 text-xl font-normal text-white">
                    +880 1307102810
                  </h5>
                </li>
                <li className="py-6 lg:py-10  ">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <IoLocationSharp className="text-primary size-7" />
                    </span>
                    <h5 className="text-2xl font-semibold text-white">
                      Location
                    </h5>
                  </div>
                  <h5 className="mt-2 text-xl font-normal text-white">
                    {" "}
                    Banasree, Dhaka, Bangladesh
                  </h5>
                </li>
                {/* <li className="py-6 max-w-[700px]">
                  <GoogleMap />
                </li> */}
              </ul>
            </ScrollMotionEffect>
          </div>

          <div className="flex flex-col col-span-2 mt-6 md:mt-0 bg-[#2c2c2c] p-6 rounded-2xl">
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <ContactForm />
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
