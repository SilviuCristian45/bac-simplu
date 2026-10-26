"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Fades and slides its content in once after mounting. Remount it (change its key) to replay.
 * With prefers-reduced-motion the content simply appears.
 */
export function Appear({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`transition-[opacity,translate] duration-500 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
