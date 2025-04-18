import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";
import CalendarCall from "@/components/events/CalendarCall";

const Page = () => {
  return (
    <div className="min-h-screen bg-csa-tan-100">
      <FruitBranch />
      <Title>events</Title>
      <CalendarCall />
    </div>
  );
};

export default Page;
