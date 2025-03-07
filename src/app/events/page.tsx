import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";
import EventCard from "@/components/events/EventCard";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <FruitBranch />
      <Title>events</Title>
      <EventCard
        name={"GM #4"}
        location={"SSC"}
        month={"Mar"}
        day={5}
        time={"8:00 PM"}
        index={0}
      />
      <Title>calendar</Title>
    </div>
  );
};

export default Page;
