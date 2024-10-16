import { useState } from "react";
import { NavLink } from "./NavLink";
import AuthNav from "./AuthNav";

const MobileMenu = ({ links, isLoggedIn, isAdmin }) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="relative z-10 duration-200 md:hidden"
      >
        {openMenu ? (
          <svg
            className="h-6 w-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        )}
      </button>

      <div
        className={`absolute inset-y-0 right-0 flex flex-col justify-center bg-slate-900 md:hidden ${openMenu ? "" : "hidden"}`}
      >
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
        <AuthNav />
      </div>
    </>
  );
};

export default MobileMenu;
