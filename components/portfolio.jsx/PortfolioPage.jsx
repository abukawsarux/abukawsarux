"use client";
import React, { useState } from "react";
import { Orbitron } from "next/font/google";
import {
  Card,
  CardHeader,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { portfolioInfo } from "@/config/data";

import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Link from "next/link";
import { LuDribbble } from "react-icons/lu";
import { FaBehance } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const orbitron = Orbitron({ subsets: ["latin"] });

const PortfolioPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [portfolioId, setPortfolioId] = useState();

  return (
    <section className="bg-black">
      <div className="container pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="flex flex-col justify-center text-white md:flex-row md:justify-between md:items-start gap-y-4 md:gap-y-0">
          <div className="w-[100%] md:w-[45%]">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2
                className={` text-4xl md:text-5xl text-center md:text-left ${orbitron.className}`}
              >
                My Work
              </h2>
            </ScrollMotionEffect>
          </div>

          <div className="w-[100%] md:w-[55%]">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <p className="text-lg text-center md:text-left">
                {`Cutting-Edge Projects Developed and optimized web applications with advanced features, utilizing modern technologies and frameworks to deliver exceptional user experiences and performance.`}
              </p>
            </ScrollMotionEffect>
          </div>
        </div>
        <div className="mt-14">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="max-w-[2000px] gap-5 grid grid-cols-12 grid-rows-2 ">
              {portfolioInfo.length > 0 &&
                portfolioInfo?.map((el, index) => (
                  <Card
                    key={index}
                    className=" group col-span-12 sm:col-span-4 bg-[#2c2c2c] p-4"
                  >
                    <div className="relative overflow-hidden rounded-2xl h-[300px]">
                      <CardHeader className="absolute z-10 flex-col !items-center bg-[#75757595] rounded-full top-4 right-4 max-w-32 !p-1 !m-0">
                        <h4 className="flex justify-center mx-0 !text-sm text-center text-white">
                          {el?.category}
                        </h4>
                      </CardHeader>
                      <Image
                        alt="Card background"
                        className="z-0 object-cover w-full  h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        src={el?.cardImage}
                      />
                    </div>
                    <div>
                      <h4 className="text-white text-start mt-4 text-2xl ">
                        {el?.title}
                      </h4>
                      <p className="text-white text-start mt-3">{el?.desc}</p>

                      <div className="flex justify-between items-center mt-4">
                        <button
                          className="bg-[#75757595] rounded-full p-4 m-2 flex gap-2 text-white justify-center items-center  cursor-pointer  hover:bg-gradient-to-r from-[#BFFD3D] to-[#7CE495] duration-400 hover:text-black"
                          onClick={() => {
                            onOpen();
                            setPortfolioId(el?.id);
                          }}
                          title="View Details"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className=" size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-[0]"> Quick View</span>
                        </button>
                        <Link
                          href={el?.dribbbleLink}
                          target="_blank"
                          className="group bg-[#75757595] rounded-full p-4 m-2 inline-flex justify-center   cursor-pointer  items-center gap-2 text-white hover:bg-gradient-to-r from-[#BFFD3D] to-[#7CE495] duration-400 hover:text-black"
                          title="View on Dribbble"
                        >
                          <LuDribbble />
                        </Link>
                        <Link
                          href={el?.behanceLink}
                          target="_blank"
                          className="bg-[#75757595] rounded-full p-4 m-2 inline-flex justify-center items-center  cursor-pointer text-white hover:bg-gradient-to-r from-[#BFFD3D] to-[#7CE495] duration-400 hover:text-black "
                          title="View on Behance"
                        >
                          <FaBehance />
                        </Link>
                        <Link
                          href={el?.websiteLink}
                          target="_blank"
                          className="bg-[#75757595] rounded-full p-4 m-2 inline-flex justify-center items-center  cursor-pointer text-white hover:bg-gradient-to-r from-[#BFFD3D] to-[#7CE495] duration-400 hover:text-black"
                          title="View Website"
                        >
                          <IoIosLink />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
      <div className="flex flex-wrap">
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
          className="bg-[#181818]"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-white">
                  Website
                </ModalHeader>
                <ModalBody>
                  id:{portfolioId}
                  {portfolioInfo
                    ?.filter((item) => item.id === portfolioId)
                    .map((el, index) => (
                      <Image
                        key={index}
                        removeWrapper
                        alt={"Portfolio image"}
                        className="z-0 object-cover w-full h-full"
                        src={
                          el.fullImage || "assets/portfolio/website-image.png"
                        }
                      />
                    ))}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default PortfolioPage;
