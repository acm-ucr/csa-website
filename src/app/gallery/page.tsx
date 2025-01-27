import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import PinkFlower from "@/components/gallery/PinkFlower";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <Heading />
      <Title text="gallery" />
      <PinkFlower />
    </div>
  );
};

export default page;
