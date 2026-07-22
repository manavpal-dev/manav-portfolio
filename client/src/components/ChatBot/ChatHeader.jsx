import { motion } from "framer-motion";
import { Bot, X } from "lucide-react";

const ChatHeader = ({ onClose }) => {
  return (
    <header
      className="
        flex
        items-center
        justify-between

        border-b
        border-slate-200

        bg-white

        px-5
        py-4
      "
    >
      <div className="flex min-w-0 items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="
            flex
            h-11
            w-11
            shrink-0

            items-center
            justify-center

            rounded-lg

            bg-slate-950

            text-white
          "
        >
          <Bot
            className="
              h-5
              w-5
            "
          />
        </motion.div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2
              className="
                truncate

                text-[15px]
                font-semibold

                text-slate-950
              "
            >
              Manav AI Assistant
            </h2>

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2

                rounded-full

                bg-emerald-500

                ring-2
                ring-emerald-100
              "
            />
          </div>

          <p
            className="
              mt-0.5

              text-xs
              font-medium

              text-slate-500
            "
          >
            Online • Portfolio assistant
          </p>
        </div>
      </div>

      <motion.button
        onClick={onClose}
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.92,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          flex
          h-9
          w-9
          shrink-0

          items-center
          justify-center

          rounded-md

          border
          border-slate-200

          bg-white

          text-slate-500
          shadow-sm

          transition-all
          duration-200

          hover:border-slate-300
          hover:bg-slate-50
          hover:text-slate-950
        "
      >
        <X className="h-4 w-4" />
      </motion.button>
    </header>
  );
};

export default ChatHeader;
