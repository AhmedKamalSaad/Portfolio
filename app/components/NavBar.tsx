import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import ActiveLink from "./ActiveLink";

const NavBar = () => {
  return (
    <nav className="w-full bg-black/50 fixed z-10 ">
      <div className="max-w-screen-2xl mx-auto px-3 flex items-center justify-between text-lg text-white h-20 ">
        <Link className="text-2xl text-rose-800" href={"/"}>
          AK
        </Link>
        <Links className=" gap-7 hidden md:flex" />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default NavBar;
const Links = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <ActiveLink href={"/work"}>Selected Work</ActiveLink>
      <ActiveLink href={"/about"}>About</ActiveLink>
      <ActiveLink href={"/contact"}>Contact</ActiveLink>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IoMenuOutline color="white" size={23} className="cursor-pointer " />
      </SheetTrigger>
      <SheetContent className="bg-slate-900 text-white border-0 grid justify-center items-center font-bold md:hidden font-roboto">
        <SheetHeader>
          <SheetTitle className="hidden">Menu</SheetTitle>
          <SheetDescription
            asChild
            className="gap-8 grid font-bold text-lg text-white"
          >
            <Links className="tracking-wide" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
