import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";
import CalendarCall from "@/components/events/CalendarCall";
import EventCard from "@/components/events/EventCard";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <FruitBranch />
      <Title>events</Title>
      <EventCard />
      <Title>calendar</Title>
      <CalendarCall />
    </div>
  );
};

export default Page;
