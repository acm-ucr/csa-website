import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <FruitBranch />
      <Heading />
      <Title text="events" />
    </div>
  );
};

export default page;
