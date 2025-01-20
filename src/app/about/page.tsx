import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import Social from "@/components/about/Social";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <Heading />
      <Title text="about" />
      <Social />
    </div>
  );
};

export default page;
