import Card from "../components/Card";
import MainSection from "../components/MainSection";

const page = () => {
  return (
    <MainSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 px-6 md:px-4 lg:px-2 ">
        {projectsArray.map((p, i) => (
          <Card href={p.href} img={p.img} title={p.title} key={i} />
        ))}
      </div>
    </MainSection>
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
