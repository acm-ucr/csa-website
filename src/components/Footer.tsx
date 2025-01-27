"use client";
import Link from "next/link";
import Image from "next/image";
import CsaLogo from "@/public/home/csalogo.svg";
import { icons } from "@/data/footerData";

const Footer = () => {
  return (
    <div className="flex items-center border-t-8 border-csa-yellow-100 bg-csa-red-200">
      <Link href="/">
        <Image src={CsaLogo} alt="CSA_Logo" className="ml-5 w-[6vw]" />
      </Link>

      <div className="absolute right-0 mr-6 flex gap-4">
        {icons.map((icon, index) => (
          <Link
            href={icon.link}
            key={index}
            className="text-5xl text-white hover:text-csa-yellow-300"
          >
            {icon.image}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
