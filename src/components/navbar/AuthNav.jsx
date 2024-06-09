import { NavLink } from "./NavLink";

const AuthNav = () => {
  const isLoggedIn = true;
  const isAdmin = true;

  if (isLoggedIn) {
    return (
      <>
        {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
        <button className="mt-3 bg-white px-3 py-2 text-end text-black md:ms-3 md:mt-0">
          Logout
        </button>
      </>
    );
  } else {
    return <NavLink link={{ title: "Login", path: "/login" }} />;
  }
};

export default AuthNav;
