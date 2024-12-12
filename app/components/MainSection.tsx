import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  className?: string;
}
const MainSection = ({ children, className }: Props) => {
  return (
    <section
      className={`max-w-screen-xl pt-44 mx-auto flex flex-col  text-white gap-20 ${className}`}
    >
      <h1 className="text-4xl font-black tracking-widest text-center">
        Selected Projects
      </h1>
      {children}
    </section>
  );
};

export default MainSection;
