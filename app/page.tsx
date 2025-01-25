import {
  About,
  Contact,
  Hero,
  NavBar,
  Projects,
  Skills,
} from "@/app/_components/Index";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="overflow-hidden max-w-screen-xl px-2  *:py-10 container mx-auto *:space-y-10 *:mx-auto *:overflow-hidden ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default page;
