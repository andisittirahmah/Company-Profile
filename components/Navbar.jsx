import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w[1440px] pl-5 pr-10 py-2">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={150} height={50} />
      </Link>
      <ul className=" text-black transition-all  cursor-pointer hidden h-full gap-9 lg:flex ">
        <li className=" hover:text-black hover:font-bold ">
          <Link href="/">Home</Link>
        </li>
        <li className=" hover:text-black hover:font-bold">
          <Link href="/about">About Us</Link>
        </li>
        <li className=" hover:text-black hover:font-bold">
          <Link href="/products">Products</Link>
        </li>
        <li className=" hover:text-black hover:font-bold">
          <Link href="/teams">Teams</Link>
        </li>
      </ul>
      <Image
        className="inline-block cursor-pointer lg:hidden"
        src="/menu.png"
        alt="menu"
        width={32}
        height={32}
      />
    </nav>
  );
};

export default Navbar;
