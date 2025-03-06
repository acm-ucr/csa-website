"use client";
import BoardCard from "./BoardCard";
import { boardInfo } from "@/data/boardInfo";
import { motion } from "framer-motion";

const fadeInFromTop = {
  initial: { opacity: 0, y: -50 },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
  }),
};

const Board = () => {
  return (
    <motion.div
      variants={fadeInFromTop}
      viewport={{ once: true }}
      initial="initial"
      whileInView={"animate"}
    >
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
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
    </motion.div>
  );
};
export default Board;
