import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-gray-800 p-5 fixed top-0 w-full z-10">
        <Link className="text-white text-2xl font-serif font-size" href="/">
          Jr
        </Link>
      </div>
    </>
  );
};

export default Navbar;
