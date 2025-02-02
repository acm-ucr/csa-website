"use client";
import BoardCard from "./BoardCard";
import { boardInfo } from "@/data/boardInfo.ts";

const Board = () => {
  return (
    <>
      <div className="mb-[16%] mt-[5%] grid grid-cols-3 gap-2 md:grid-cols-3">
        {boardInfo.map((CARD) => (
          <BoardCard
            name={CARD.name}
            title={CARD.title}
            image={CARD.image}
            color={CARD.color}
          />
        ))}
      </div>
    </>
  );
};
export default Board;
