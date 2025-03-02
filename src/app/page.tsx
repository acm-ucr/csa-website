import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/events/EventHighlightsTitle";
import Landing from "@/components/home/Landing";
import Quotes from "@/components/home/Quote";
import MemberExp from "@/components/home/MemberExperienceTitle";

const Page = () => {
  return (
    <div className="bg-csa-tan-400 pt-[12.2vh] md:pt-[14.4vh]">
      <Landing />
      <XinDescription />
      <EHTitle />
      <Quotes />
      <MemberExp />
    </div>
  );
};

export default Page;
