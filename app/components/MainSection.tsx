import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  className?: string;
  mainText:string
}
const MainSection = ({ children, className , mainText }: Props) => {
  return (
    <section
      className={`max-w-screen-xl pt-44 mx-auto flex flex-col  text-white gap-20 ${className}`}
    >
      <h1 className="text-4xl font-black tracking-widest text-center">
{mainText}      </h1>
      {children}
    </section>
  );
};

export default MainSection;
