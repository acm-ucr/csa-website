import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";
import EventCard from "@/components/events/EventCard";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <FruitBranch />
      <Title>events</Title>
      <EventCard />
      <Title>calendar</Title>
    </div>
  );
};

export default Page;
