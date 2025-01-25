"use client";
import { motion } from "framer-motion";
import Heading from "./Heading";

const About = () => {
  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
        >
      <Heading text="About Me" />
      <p className=" text-paragraph px-2 leading-8  text-center ">
        I have been captivated by the magic of programming since a young age.
        This early passion ignited a lifelong pursuit of crafting innovative and
        user-centric digital experiences. As a skilled frontend developer, I
        specialize in bringing designs to life through clean, efficient, and
        visually stunning code. With a deep understanding of HTML, CSS, and
        JavaScript, I leverage the power of modern frontend frameworks like
        React and Next.js to build interactive and responsive web applications.
        Their dedication to staying up-to-date with the latest technologies and
        best practices ensures that their projects are always cutting-edge.
      </p>
    </motion.section>
  );
};

export default About;
