import type { ReactNode } from "react";

/** Badge for a single technology. Expects a list parent (<ul>). */
export function Tag({ children }: { children: ReactNode }) {
    return (
        <li className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground/80">
            {children}
        </li>
    );
}
