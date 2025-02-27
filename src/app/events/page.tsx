import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";
import EventCard from "@/components/events/EventCard";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <FruitBranch />
      <Title text="events" />
      <EventCard />
      <Title text="calendar" />
    </div>
  );
};

export default Page;
