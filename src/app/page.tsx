import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/events/EventHighlightsTitle";

const Home = () => {
  return (
    <div className="flex-col h-screen w-screen items-center justify-center">
      <EHTitle />
      <XinDescription />
    </div>
  );
};

export default Home;
