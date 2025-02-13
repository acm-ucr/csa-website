import Title from "@/components/Title";
import FruitBranch from "@/components/events/FruitBranch";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <FruitBranch />
      <Title text="events" />
      <Title text="calendar" />
    </div>
  );
};

export default Page;
