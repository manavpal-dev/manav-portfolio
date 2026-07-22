import { motion } from "framer-motion";

import ChatHeader from "./ChatHeader";
import QuickQuestions from "./QuickQuestions";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatWindow = ({
  onClose,
  messages,
  input,
  setInput,
  onSend,
  isLoading,
  showTyping,
  onQuickQuestion,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 16,
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        damping: 22,
        stiffness: 180,
      }}
      className="
        fixed
        bottom-24
        right-5
        z-50

        flex
        h-[640px]
        w-[410px]
        flex-col

        overflow-hidden

        rounded-lg

        border
        border-zinc-200

        bg-zinc-900
        text-slate-950

        shadow-[0_24px_70px_rgba(15,23,42,0.24)]

        max-sm:bottom-0
        max-sm:left-0
        max-sm:right-0
        max-sm:h-[100dvh]
        max-sm:w-full
        max-sm:rounded-none
      "
    >
      <ChatHeader onClose={onClose} />

      <QuickQuestions onQuickQuestion={onQuickQuestion} isLoading={isLoading} />

      <ChatMessages messages={messages} showTyping={showTyping} />

      <ChatInput
        input={input}
        setInput={setInput}
        onSend={onSend}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default ChatWindow;
