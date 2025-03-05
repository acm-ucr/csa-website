import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/events/EventHighlightsTitle";
import Landing from "@/components/home/Landing";
import Quotes from "@/components/home/Quote";

const Page = () => {
  return (
    <div className="bg-csa-tan-400">
      <Landing />
      <XinDescription />
      <EHTitle />
      <Quotes />
    </div>
  );
};

export default Page;
