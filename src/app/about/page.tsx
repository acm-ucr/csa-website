import WhoWeAre from "@/components/about/WhoWeAre";
import Title from "@/components/Title";
import RightLantern from "@/components/about/RightLantern";
import FourPillars from "@/components/about/FourPillars";
import CherryTree from "@/components/about/CherryTree";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <RightLantern />
      <Title>about</Title>
      <WhoWeAre />
      <CherryTree />
      <FourPillars />
    </div>
  );
};

export default Page;
