import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <section className="max-w-screen-xl pt-44 mx-auto flex flex-col  text-white gap-20">
      <h1 className="text-4xl font-black tracking-widest text-center">Selected Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 px-6 md:px-4 lg:px-2 ">
        {projectsArray.map((p, i) => (
          <Card href={p.href} img={p.img} title={p.title} key={i} />
        ))}


      </div>
    </section>
  );
};

export default page;

const projectsArray = [
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
];
