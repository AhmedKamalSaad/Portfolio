"use client";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "./Heading";

const Projects = () => {
  const projectsArray = [
    {
      title: "Games Website",
      img: "/Games.png",
      href: "https://games-zeta-orcin.vercel.app/",
    },
    {
      title: "Realestate",
      img: "/Realestate.png",
      href: "https://akrealestate.vercel.app",
    },
    {
      title: "Moives website",
      img: "/Movies.png",
      href: "https://scene-seeker.vercel.app",
    },
    {
      title: "Coffee shop",
      img: "/Coffe shop.png",
      href: "https://coffee-omega-weld.vercel.app",
    },
    {
      title: "Ecommerce",
      img: "/Ec.png",
      href: "https://ecommerce-sigma-mauve-86.vercel.app",
    },
  ];

  return (
    <section id="SelectedProjects">
      <Heading text="Selected Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 px-6 md:px-4 lg:px-2 pb-9  ">
        {projectsArray.map(({ href, img, title }, i) => (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            key={i}
            className="shadow-lg rounded-md border-2 border-white overflow-hidden "
          >
            <Image
              alt="project"
              src={img}
              className="object-cover object-center w-full h-[300px]"
              width={400}
              height={200}
              
            />
            <div className="space-y-[2px] pl-2 py-1">
              <h1 className="text-lg tracking-widest  text-headline">
                {title}
              </h1>
              <Link
                href={href}
                className="underline flex items-center text-sm hover:opacity-70 transition-opacity w-fit text-paragraph"
              >
                Link preview <LinkIcon size={11} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>{" "}
    </section>
  );
};

export default Projects;
