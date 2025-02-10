import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import Social from "@/components/about/Social";
import Academic from "@/components/about/Academic";
import Culture from "@/components/about/Culture";
import RightLantern from "@/components/about/RightLantern";
import Philanthropy from "@/components/about/Philanthropy";
import CherryTree from "@/components/about/CherryTree";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <RightLantern />
      <Title text="about" />
      <WhoWeAre />
      <CherryTree />
      <Heading />
      <Philanthropy />
      <Social />
      <Culture />
      <Academic />
    </div>
  );
};

export default Page;
