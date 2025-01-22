import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import Social from "@/components/about/Social";
import RightLantern from "@/components/about/RightLantern";
import Philanthropy from "@/components/about/Philanthropy";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <Heading />
      <Title text="about" />
      <Social />
      <RightLantern />
      <Philanthropy />
    </div>
  );
};

export default page;
