import WhoWeAre from "@/components/about/WhoWeAre";
import Heading from "@/components/about/FourPillTitle";
import Title from "@/components/Title";
import Academic from "@/components/about/AcademicComponent";
import Culture from "@/components/about/Culture";
import RightLantern from "@/components/about/RightLantern";
import Philanthropy from "@/components/about/Philanthropy";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <Heading />
      <Title text="about" />
      <Academic />
      <RightLantern />
      <Philanthropy />
      <Culture />
    </div>
  );
};

export default page;
