"use client";
import { motion } from "framer-motion";
const Heading = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-4xl font-black tracking-widest text-Tertiary text-center"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Heading;
