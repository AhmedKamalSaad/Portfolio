"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HomeIcon } from "lucide-react";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiGalleryView } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
const NavBar = () => {
  const links: { id: string; title: string; icon: React.ReactNode }[] = [
    { id: "Home", title: "Home", icon: <HomeIcon /> },
    {
      id: "SelectedProjects",
      title: "SelectedProjects",
      icon: <RiGalleryView size={25} />,
    },
    { id: "About", title: "About", icon: <RxAvatar size={25} /> },
    { id: "Contact", title: "Contact", icon: <MdEmail size={25} /> },
  ];
  const [activeTab, setActiveTab] = useState(links[0].id);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      variants={{ hidden: { y: "-100%" }, visible: { y: 0 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed w-full mx-auto py-2 z-50"
    >
      <nav className="flex gap-3 w-fit text-headline bg-bg bg-opacity-75 border mx-auto py-1 px-2 rounded-full items-center">
        {links.map((link, i) => (
          <button
            title={link.title}
            key={i}
            className={`relative  ${
              activeTab === link.id ? "" : "hover:opacity-80"
            } transition-colors rounded-full outline-2 outline-sky-400 focus-visible:outline px-2 py-1 text-sm`}
            onClick={() => {
              handleScroll(link.id);
              setActiveTab(link.id);
            }}
          >
            {activeTab === link.id && (
              <motion.div
                className="absolute inset-0 bg-Btn/50  rounded-full"
                layoutId="active-pill"
                transition={{ type: "spring", duration: "0.6" }}
              ></motion.div>
            )}
            <div className=" flex gap-2 items-center  mix-blend-darken">
              {link.icon}
              <span className="hidden md:block">{link.title}</span>
            </div>
          </button>
        ))}
      </nav>
    </motion.div>
  );
};

export default NavBar;
