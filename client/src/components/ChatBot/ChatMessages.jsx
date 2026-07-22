import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import MessageBubble from "./MessageBubble";
import TypingLoader from "./TypingLoader";

const ChatMessages = ({ messages, showTyping }) => {
  const bottomRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    const timeout = setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [messages]);

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        flex-1

        overflow-y-auto

        bg-slate-50

        px-4
        py-5

        space-y-4

        scrollbar-thin
        scrollbar-thumb-slate-300
        scrollbar-track-slate-100
      "
    >
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          role={message.role}
          content={message.content}
          timestamp={message.timestamp}
        />
      ))}

      {/* Typing Loader */}
      {showTyping && <TypingLoader />}

      {/* Bottom Ref */}
      <div ref={bottomRef} />
    </motion.div>
  );
};

export default ChatMessages;
