import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const ChatButton = ({ onOpen }) => {
  return (
    <motion.button
      onClick={onOpen}
      aria-label="Open AI Chat Assistant"
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="
        group
        fixed
        bottom-5
        right-5
        z-50

        flex
        h-14
        min-w-[174px]
        items-center
        gap-3

        rounded-lg

        border
        border-slate-200

        bg-zinc-300

        px-3.5

        text-left
        text-slate-950

        shadow-[0_18px_42px_rgba(15,23,42,0.22)]

        transition
        duration-200

        hover:border-slate-300
        hover:bg-slate-50

        max-sm:h-14
        max-sm:w-14
        max-sm:min-w-0
        max-sm:justify-center
        max-sm:px-0
      "
    >
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-md

          bg-slate-950

          text-white

          transition
          duration-200

          group-hover:bg-slate-800
        "
      >
        <Bot className="h-5 w-5" />
      </span>

      <span className="min-w-0 max-sm:hidden">
        <span className="block text-sm font-semibold leading-5">
          Ask Manav AI
        </span>
        <span className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Online now
        </span>
      </span>
    </motion.button>
  );
};

export default ChatButton;
