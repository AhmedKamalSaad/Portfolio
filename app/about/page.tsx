import Image from "next/image";
import MainSection from "../components/MainSection";
import type { Metadata } from "next";

const page = () => {
  return (
    <MainSection className="lg:h-[750px]">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:px-6">
        <Image
          alt="My photo"
          src={"/bio.jpg"}
          height={500}
          width={800}
          priority
          className="object-cover w-1/2 h-full"
        />
        <div className="w-1/2 flex flex-col items-center h-full lg:px-5">
          <h2 className="text-2xl font-bold mb-3 mt-5 lg:mt-0 text-red-700">Biography</h2>
          <p className="text-base font-medium text-slate-100 mb-10 leading-9 ">
            I have been captivated by the magic of programming since a
            young age. This early passion ignited a lifelong pursuit of crafting
            innovative and user-centric digital experiences. As a skilled
            frontend developer, I specialize in bringing designs to
            life through clean, efficient, and visually stunning code. With a
            deep understanding of HTML, CSS, and JavaScript, I
            leverage the power of modern frontend frameworks like React and
            Next.js to build interactive and responsive web applications. Their
            dedication to staying up-to-date with the latest technologies and
            best practices ensures that their projects are always cutting-edge.
          </p>
          <h2 className="text-2xl font-bold mb-4  text-red-700">Skills</h2>
          <div className="flex flex-wrap bg-white px-1">
            {imgArray.map((m, i) => (
              <Image
                key={i}
                alt="skill"
                src={m}
                width={200}
                height={200}
                className="max-w-[100px] max-h-[100px] "
              />
            ))}
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default page;
const imgArray = [
  "/html.png",
  "/css.png",
  "/js.png",
  "/react.png",
  "/next.png",
  "/git.png",
];
export const metadata: Metadata = {
  title: "About",
  description: "Ahmed Kamal Portfolio",
};
