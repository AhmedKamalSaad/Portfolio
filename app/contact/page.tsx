import Link from "next/link";
import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const page = () => {
  return (
    <section className='"max-w-screen-xl pt-44 mx-auto flex flex-col text-white gap-20'>
      <h1 className="text-4xl font-black tracking-widest text-center">
        Contact
      </h1>
      {array.map((a, i) => (
        <MainDiv text={a.text} contact={a.contact} key={i}>
          {a.icon}
        </MainDiv>
      ))}
    </section>
  );
};

export default page;

const array: {
  icon: ReactNode;
  text: string;
  contact: string | { href: string; label: string };
}[] = [
  {
    icon: <FiMail size={30} />,
    text: "Mail me at",
    contact: "ahmedkamalsaad110@gmail.com",
  },

  {
    icon: <FiPhoneCall size={30} />,
    text: "call me on",
    contact: "+201012344585",
  },

  {
    icon: <FaLinkedin size={30} />,
    text: "My Linkedin",
    contact: {
      href: "https://www.linkedin.com/in/ahmed-kamal-a74049287/",
      label: "LinkedIn Profile",
    },
  },
];

interface props {
  children: ReactNode;
  text: string;
  contact: string | { href: string; label: string };
}

const MainDiv = ({ children, text, contact }: props) => {
  return (
    <div className="max-w-2xl w-full h-fit p-2 flex items-center justify-center mx-auto bg-slate-400 gap-8">
      {children}
      <div className="flex flex-col items-center">
        <p className="text-black">{text}</p>
        {typeof contact === "string" ? (
         <p className="text-red-800">{ contact }</p> 
        ) : (
          <Link href={contact.href} className="text-red-800 underline">
            {contact.label}
          </Link>
        )}
      </div>
    </div>
  );
};