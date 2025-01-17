import React from "react";
import XinDescription from "@/components/home/XinDescription";
import MemberTitle from "@/components/home/MemberExperienceTitle";
import MissionStatement from "@/components/home/MissionStatement";
import EHTitle from "@/components/events/EventHighlightsTitle";

const Home = () => {
  return (
    <div className="bg-csa-tan-100 pt-[12.2vh] md:pt-[14.4vh]">
      <EHTitle />
      <XinDescription />
      <MissionStatement />
      <MemberTitle />
    </div>
  );
};

export default Home;
