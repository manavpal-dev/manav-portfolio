const TypingLoader = () => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-[11px] font-semibold text-slate-700 shadow-sm">
        AI
      </div>

      <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0.4s]" />
      </div>
    </div>
  );
};

export default TypingLoader;
