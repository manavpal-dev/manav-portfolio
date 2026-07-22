import { motion } from "framer-motion";
import { Bot } from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const linkifyPlainText = (text) =>
  text
    .split(/(\[[^\]]+\]\([^)]+\))/g)
    .map((part) => {
      if (/^\[[^\]]+\]\([^)]+\)$/.test(part)) return part;

      return part
        .replace(
          /(^|[\s(])((?:https?:\/\/|www\.)[^\s<>)]+)/g,
          (_, prefix, url) => {
            const href = url.startsWith("www.") ? `https://${url}` : url;
            return `${prefix}[${url}](${href})`;
          },
        )
        .replace(
          /(^|[\s(])([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi,
          (_, prefix, email) => `${prefix}[${email}](mailto:${email})`,
        )
        .replace(
          /(^|[\s(])(\+91\s?\d{10})/g,
          (_, prefix, phone) =>
            `${prefix}[${phone}](tel:${phone.replace(/\s/g, "")})`,
        );
    })
    .join("");

const baseMarkdownClasses = `
  text-[14px]
  leading-6

  [&>*:first-child]:mt-0
  [&>*:last-child]:mb-0
  [&_a]:break-words
  [&_a]:font-semibold
  [&_a]:underline
  [&_a]:underline-offset-4
  [&_blockquote]:my-3
  [&_blockquote]:border-l-2
  [&_blockquote]:pl-3
  [&_code]:rounded
  [&_code]:px-1
  [&_code]:py-0.5
  [&_li]:my-1
  [&_ol]:my-3
  [&_ol]:list-decimal
  [&_ol]:pl-5
  [&_p]:my-2
  [&_pre]:my-3
  [&_pre]:max-w-full
  [&_pre]:overflow-x-auto
  [&_pre]:rounded-md
  [&_pre]:border
  [&_pre]:p-3
  [&_pre_code]:bg-transparent
  [&_pre_code]:p-0
  [&_strong]:font-semibold
  [&_ul]:my-3
  [&_ul]:list-disc
  [&_ul]:pl-5
`;

const MessageBubble = ({ role, content, timestamp }) => {
  if (!content?.trim()) return null;

  const isAssistant = role === "assistant";
  const markdownContent = linkifyPlainText(content);

  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const messageVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={messageVariants}
      transition={{
        duration: 0.22,
      }}
      className={`flex items-end gap-2 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      {isAssistant && (
        <div
          className="
            mb-5
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center

            rounded-md

            border
            border-zinc-200

            bg-zinc-300

            text-zinc-700
            shadow-sm
          "
        >
          <Bot className="h-4 w-4" />
        </div>
      )}

      <div
        className={`
          max-w-[84%]
          overflow-hidden

          rounded-lg

          px-4
          py-3

          shadow-sm

          ${
            isAssistant
              ? `
                border
                border-zinc-200

                bg-zinc-300

                text-zinc-800
              `
              : `
                bg-zinc-950

                text-white
              `
          }
        `}
      >
        <div
          className={`
            ${baseMarkdownClasses}

            ${
              isAssistant
                ? `
                  [&_a]:text-blue-700
                  [&_a]:decoration-blue-300
                  [&_a:hover]:text-blue-900
                  [&_blockquote]:border-slate-300
                  [&_code]:bg-slate-100
                  [&_code]:text-slate-900
                  [&_pre]:border-slate-200
                  [&_pre]:bg-slate-50
                  [&_strong]:text-slate-950
                `
                : `
                  [&_a]:text-white
                  [&_a]:decoration-white/60
                  [&_blockquote]:border-white/35
                  [&_code]:bg-white/15
                  [&_code]:text-white
                  [&_pre]:border-white/15
                  [&_pre]:bg-white/10
                  [&_strong]:text-white
                `
            }
          `}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {children}
                </a>
              ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>

        <div
          className={`
            mt-2

            text-[11px]
            font-medium

            ${isAssistant ? "text-slate-400" : "text-white/65"}
          `}
        >
          {formattedTime}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
