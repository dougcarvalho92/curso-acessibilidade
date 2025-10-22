"use client";
import { ReactNode, useEffect } from "react";

export default function Axe({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    let mounted = true;

    (async () => {
      if (typeof window === "undefined" || !mounted) return;
      try {
        const axe = await import("@axe-core/react");
        const ReactDOM = await import("react-dom");
        const React = await import("react");
        if (!mounted) return;
        axe.default(React.default, ReactDOM.default, 1000);
      } catch (e) {
        // ignore initialization errors in dev
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return <div>{children}</div>;
}
