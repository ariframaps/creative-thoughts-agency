"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      key={link.title}
      className={
        pathName == link.path
          ? "bg-white px-10 py-2 text-black md:rounded-full md:px-5 md:py-2"
          : "px-10 py-2 md:px-5 md:py-2"
      }
    >
      {link.title}
    </Link>
  );
};
