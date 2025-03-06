import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";
import CalendarCall from "@/components/events/CalendarCall";
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
        index={2}
      />
      <Title>calendar</Title>
      <CalendarCall />
    </div>
  );
};

export default Page;
