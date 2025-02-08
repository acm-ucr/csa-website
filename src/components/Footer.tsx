import Link from "next/link";
import Image from "next/image";
import CsaLogo from "@/public/home/csalogo.svg";
import { icons } from "@/data/footerData";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 border-t-8 border-csa-yellow-100 bg-csa-red-200 pb-4 md:flex-row md:gap-0 md:pb-0">
      <Link href="/">
        <Image
          src={CsaLogo}
          alt="CSA_Logo"
          className="mt-2 w-[20vw] md:ml-5 md:mt-0 md:w-[6vw]"
        />
      </Link>

      <div className="flex gap-4 md:absolute md:right-0 md:mr-6">
        {icons.map((icon, index) => (
          <Link
            href={icon.link}
            key={index}
            className="text-3xl text-white hover:scale-110 hover:text-csa-yellow-300 md:text-5xl"
            target="_blank"
          >
            {icon.image}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
