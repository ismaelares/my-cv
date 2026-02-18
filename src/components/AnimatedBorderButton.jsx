import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <button className="relative px-6 py-3 text-lg font-medium text-primary  overflow-hidden group rounded-full">
      <span className="absolute inset-0 border-2 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {" "}
        <Download className="w-5 h-5" /> Download CV
      </span>
    </button>
  );
};
