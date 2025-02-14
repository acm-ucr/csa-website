import Title from "@/components/Title";
import Events from "@/components/gallery/Event";
import Gallery from "@/components/gallery/Gallery";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <Title text="gallery" />
      <Events />
      <Gallery />
    </div>
  );
};

export default Page;
