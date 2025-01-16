import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/events/EventHighlightsTitle";

const Home = () => {
  return (
    <div className="h-screen w-screen flex-col items-center justify-center">
      <EHTitle />
      <XinDescription />
    </div>
  );
};

export default Home;
