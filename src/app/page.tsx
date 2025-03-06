import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/home/EventHighlightsTitle";
import Landing from "@/components/home/Landing";
import MemberExperiences from "@/components/home/MemberExperiences";

const Page = () => {
  return (
    <div className="bg-csa-tan-400">
      <Landing />
      <XinDescription />
      <EHTitle />
      <MemberExperiences />
    </div>
  );
};

export default Page;
