"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <section className=" pt-[100px] " id="Home">
      <div className="flex gap-10 flex-col-reverse md:flex-row max-w-screen-lg items-center w-full mx-auto justify-between px-4 pt-[25px] ">
        <motion.div
          initial={{ x: "-150%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl !leading-[4rem] text-nowrap md:text-5xl tracking-wider text-black ">
            I am{" "}
            <span className=" underline underline-offset-4 decoration-Tertiary  text-headline">
              Ahmed Kamal
            </span>
            <br /> Web Developer
          </h1>
          <div className="flex gap-8 items-center mt-5">
            <a
              className=" cursor-pointer bg-headline text-bg px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
              download
              href="Ahmed Kamal Cv.pdf"
            >
              <FiDownload className="animate-bounce" />
              My CV
            </a>
            <div className="flex gap-8">
              <Link href={"https://www.facebook.com/ahmedkamal157/"}>
                <FaFacebook className="text-blue-800 w-7 h-7" />
              </Link>
              <Link
                href={
                  "https://wa.me/201012344585?text=Hi%20Ahmed!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20chat."
                }
              >
                <FaWhatsapp className="text-green-600 w-7 h-7" />
              </Link>
              <Link href={"https://www.linkedin.com/in/ahmed-kamal-a74049287/"}>
                <FaLinkedin className="text-blue-700 w-7 h-7" />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "150%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 0.9 }}
          className=" rounded-full overflow-hidden "
        >
          <Image
            alt="My photo"
            src={"/2H4A4173.jpg"}
            height={300}
            width={300}
            style={{ width: "auto", height: "auto" }}
            className="aspect-square max-h-[320px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
