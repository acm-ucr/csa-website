import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/events/EventHighlightsTitle";
import Landing from "@/components/home/Landing";
import Quotes from "@/components/home/Quote";
import CarouselHome from "@/components/CarouselHome";

const Page = () => {
  return (
    <div className="overflow-hidden bg-csa-tan-400 pt-[12.2vh] md:pt-[14.4vh]">
      <Landing />
      <XinDescription />
      <CarouselHome />
      <EHTitle />
      <Quotes />
    </div>
  );
};

export default Page;
