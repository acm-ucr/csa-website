import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import Gallery from "@/components/gallery/Gallery";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <Heading />
      <Title text="gallery" />
      <Gallery />
    </div>
  );
};

export default page;
