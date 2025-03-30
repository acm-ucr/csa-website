import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/home/EventHighlightsTitle";
import Landing from "@/components/home/Landing";
import CarouselHome from "@/components/home/CaroHome";
import MemberExperiences from "@/components/home/MemberExperiences";

const Page = () => {
  return (
    <div className="overflow-hidden bg-csa-tan-400">
      <Landing />
      <XinDescription />
      <EHTitle />
      <CarouselHome />
      <MemberExperiences />
    </div>
  );
};

export default Page;
