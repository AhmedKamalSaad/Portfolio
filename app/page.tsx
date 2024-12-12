import Image from "next/image";

export default function Home() {
  return (
    <section
      className='relative flex items-center flex-col justify-center h-screen text-center tracking-widest gap-3 overflow-hidden text-white'
    >
      <p className="text-2xl font-bold text-rose-800 shadow-lg p-1 ">
        Web Developer
      </p>
      <h1 className="text-6xl font-bold tracking-widest">Ahmed Kamal</h1>
      <div className="absolute inset-0 bg-transparent backdrop-blur-sm -z-10"></div>

      <Image
        fill
        src={"/bubun-das-Jn_6SY02LpE-unsplash.jpg"}
        alt="bg-img"
        className=" brightness-50 -z-20 "
        priority
      />
    </section>
  );
}
