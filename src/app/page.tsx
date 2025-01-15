import XinDescription from "@/components/home/XinDescription";
import MemberTitle from "@/components/home/MemberExperienceTitle";

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <XinDescription />
      </div>

      <div>
        <MemberTitle />
      </div>
    </>
  );
};

export default Home;
