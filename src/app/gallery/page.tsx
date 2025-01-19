import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <Heading />
      <Title text="gallery" />
    </div>
  );
};

export default page;
