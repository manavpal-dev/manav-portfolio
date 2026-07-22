import { motion } from "framer-motion";

import { quickQuestions } from "./chatbotData";

const QuickQuestions = ({ onQuickQuestion, isLoading }) => {
  return (
    <div
      className={`
        flex
        gap-2

        overflow-x-auto

        border-b
        border-slate-200

        bg-slate-50

        px-4
        py-3

        scrollbar-hide
        ${isLoading ? "pointer-events-none opacity-50" : ""}
      `}
    >
      {quickQuestions.map((item, index) => (
        <motion.button
          key={item}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.08,
          }}
          whileHover={{
            y: -1,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={() => {
            if (isLoading) return;

            onQuickQuestion(item);
          }}
          className="
              flex-shrink-0

              whitespace-nowrap

              rounded-md

              border
              border-slate-200

              bg-white

              px-3.5
              py-2

              text-[13px]
              font-medium

              text-slate-700

              shadow-sm

              transition-all
              duration-200

              hover:border-slate-300
              hover:bg-slate-100
              hover:text-slate-950
            "
        >
          {item}
        </motion.button>
      ))}
    </div>
  );
};

export default QuickQuestions;
