"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const AuroraBackground = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = event;
      const { width, height, left, top } = ref.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      ref.current.style.setProperty("--x", x.toString());
      ref.current.style.setProperty("--y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-screen overflow-hidden bg-slate-950",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -inset-[100%] opacity-50">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[100%] rounded-full"
            style={{
              background:
                "conic-gradient(from calc(var(--x) * 360deg + var(--y) * 360deg), #4c54bc, #6e45a6, #b845a6, #de455f, #e3a345, #62dd7d, #4c54bc)",
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="relative">{children}</div>
    </div>
  );
};
