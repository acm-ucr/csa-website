import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";
import CalendarCall from "@/components/events/CalendarCall";

const Page = () => {
  return (
    <div className="bg-csa-tan-100 min-h-screen">
      <FruitBranch />
      <Title>events</Title>
      <CalendarCall />
    </div>
  );
};

export default Page;
