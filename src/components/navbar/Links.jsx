"use client";
import { NavLink } from "./NavLink";
import MobileMenu from "./MobileMenu";
import AuthNav from "./AuthNav";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  return (
    <div>
      <div className="hidden items-center md:flex lg:gap-5">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
        <AuthNav />
      </div>

      {/* mobile menu */}
      <MobileMenu links={links} />
    </div>
  );
};

export default Links;
