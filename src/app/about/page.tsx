import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import RightLantern from "@/components/about/RightLantern";
import FourPillars from "@/components/about/FourPillars";
import CherryTree from "@/components/about/CherryTree";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <RightLantern />
      <Title text="about" />
      <WhoWeAre />
      <CherryTree />
      <Heading />
      <FourPillars />
    </div>
  );
};

export default Page;
