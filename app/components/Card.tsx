import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  title,
  img,
  href,
}: {
  title: string;
  img: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="min-w-[300px] h-[500px] shadow-lg bg-white/85 hover:brightness-50 flex items-end justify-center relative hover:scale-105 transition-transform"
    >
      <Image priority src={img} alt="Project image"  width={800} height={500} className="object-fill w-full h-full absolute inset-0 " />
      <h1 className="font-bold z-10 bg-red-800/70 w-full text-center">{title}</h1>
    </Link>
  );
};

export default Card;
