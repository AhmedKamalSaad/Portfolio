"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
const Contact = () => {
  const contactArray = [
    {
      img: "/email.svg",
      children: (
        <div className="flex flex-col">
          <p className="text-headline">Gmail: AhmedKamalsaad110</p>
          <p className="text-headline">Icloud: Ahmed_kamal11</p>
        </div>
      ),
    },
    {
      children: <p className="text-headline">+201012344585</p>,
      img: "/phone.svg",
    },
    {
      children: (
        <>
          <Link
            href={"https://www.linkedin.com/in/ahmed-kamal-a74049287/"}
            className="text-headline hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ahmed-kamal-a74049287/"}
            className="text-headline hover:underline"
          >
            Github
          </Link>
        </>
      ),
      img: "/website.svg",
    },
  ];

  return (
    <section id="Contact" className="pb-10">
      <Heading text="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between overflow-hidden">
        {contactArray.map((contact, i) => (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            key={i}
            className="bg-white/20 px-2 py-4 rounded-lg shadow-lg flex items-center flex-col border border-headline/30 text-nowrap "
          >
            <Image
              src={contact.img}
              alt={"photo"}
              width={80}
              height={80}
              className="mb-8"
            />
            {contact.children}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
