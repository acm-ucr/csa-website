import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import RightLantern from "@/components/about/RightLantern";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <Heading />
      <Title text="about" />
      <RightLantern />
    </div>
  );
};

export default page;
