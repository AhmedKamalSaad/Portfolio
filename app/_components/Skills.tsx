"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";

const imgArray = [
  { text: "Figma", url: "/skills/figma.svg" },
  { text: "Git", url: "/skills/git.svg" },
  { text: "Javascript", url: "/skills/js.svg" },
  { text: "Typescript", url: "/skills/typescript.svg" },
  { text: "React.js", url: "/skills/reactjs.svg" },
  { text: "Next.js", url: "/skills/nextjs.svg" },
  { text: "Tailwindcss", url: "/skills/tailwind-css.svg" },
];
const Skills = () => {
  return (
    <section id="Skills">
      <Heading text="Skills" />
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", staggerDirection: 1 }}
        className="flex flex-wrap gap-10 items-baseline justify-center md:justify-between"
      >
        {imgArray.map(({ text, url }, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Image
              alt="logo"
              src={url}
              width={60}
              height={60}
              className="aspect-square"
              
            />
            <p className="text-base text-paragraph">{text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
