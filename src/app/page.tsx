import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/home/EventHighlightsTitle";
import Landing from "@/components/home/Landing";
import CarouselHome from "@/components/home/CarouselHome";
import MemberExperiences from "@/components/home/MemberExperiences";

const Page = () => {
  return (
    <div className="overflow-hidden bg-csa-tan-400 pt-[12.2vh] md:pt-[14.4vh]">
      <Landing />
      <XinDescription />
      <CarouselHome />
      <EHTitle />
      <MemberExperiences />
    </div>
  );
};

export default Page;
