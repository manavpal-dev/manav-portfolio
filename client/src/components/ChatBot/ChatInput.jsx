import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { MessageSquare, SendHorizontal } from "lucide-react";

const ChatInput = ({ input, setInput, onSend, isLoading }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLoading || !input.trim()) return;

    onSend();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        border-t
        border-slate-200

        bg-white

        p-4
      "
    >
      <div
        className="
          flex
          items-center
          gap-3

          rounded-lg

          border
          border-slate-200

          bg-slate-50

          px-3
          py-2.5

          transition
          duration-200

          focus-within:border-slate-400
          focus-within:bg-white
          focus-within:ring-4
          focus-within:ring-slate-950/5
        "
      >
        <MessageSquare className="h-4 w-4 shrink-0 text-slate-400" />

        <input
          ref={inputRef}
          disabled={isLoading}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder={isLoading ? "AI is replying..." : "Ask about Manav..."}
          aria-label="Message Manav AI Assistant"
          className="
            min-w-0
            flex-1

            border-0
            bg-transparent
            p-0

            text-[14px]
            font-medium
            text-slate-950

            outline-none
            ring-0

            placeholder:text-slate-400

            focus:border-0
            focus:ring-0

            disabled:cursor-not-allowed
            disabled:text-slate-500
          "
        />

        <motion.button
          type="submit"
          disabled={isLoading || !input.trim()}
          whileHover={{
            scale: input.trim() && !isLoading ? 1.03 : 1,
          }}
          whileTap={{
            scale: input.trim() && !isLoading ? 0.96 : 1,
          }}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center

            rounded-md

            bg-slate-950

            text-white

            transition
            duration-200

            hover:bg-slate-800

            disabled:cursor-not-allowed
            disabled:bg-slate-200
            disabled:text-slate-400
          "
        >
          <SendHorizontal className="h-4 w-4" />
        </motion.button>
      </div>
    </form>
  );
};

export default ChatInput;
