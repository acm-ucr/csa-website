import BoardCard from "./BoardCard";
import { boardInfo } from "@/data/boardInfo";

const Board = () => {
  return (
    <>
      <div className="mb-[16%] grid grid-cols-3 gap-2 md:grid-cols-3">
        {boardInfo.map((CARD, index) => (
          <BoardCard
            key={index}
            index={index}
            name={CARD.name}
            title={CARD.title}
            image={CARD.image}
          />
        ))}
      </div>
    </>
  );
};
export default Board;
