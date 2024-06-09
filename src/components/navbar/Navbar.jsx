import Links from "./Links";

export const Navbar = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-between px-7 py-7 lg:py-10 xl:px-20 2xl:max-w-screen-2xl">
      <div>logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};
