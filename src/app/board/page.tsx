import Board from "@/components/board/Board";
import GroupPhoto from "@/components/board/GroupPhoto";
import Title from "@/components/Title";

const Page = () => {
  return (
    <div className="bg-csa-tan-100">
      <Title>board</Title>
      <Board />
      <GroupPhoto />
    </div>
  );
};
export default Page;
