import React from "react";
import XinDescription from "@/components/home/XinDescription";
import MemberTitle from "@/components/home/MemberExperienceTitle";
import MissionStatement from "@/components/home/MissionStatement";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-csa-tan-100">
      <XinDescription />
      <MissionStatement />
      <MemberTitle />
    </div>
  );
};

export default Home;
