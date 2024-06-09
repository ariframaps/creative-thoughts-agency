import { NavLink } from "./NavLink";

const AuthNav = () => {
  const isLoggedIn = true;
  const isAdmin = true;

  if (isLoggedIn) {
    return (
      <div className="mt-3 flex flex-col gap-2 text-end md:ms-3 md:mt-0 md:flex-row">
        {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
        <button className="bg-white px-10 py-2 text-end text-black md:px-7">
          Logout
        </button>
      </div>
    );
  } else {
    return <NavLink link={{ title: "Login", path: "/login" }} />;
  }
};

export default AuthNav;
