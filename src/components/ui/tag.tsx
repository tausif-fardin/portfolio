import type { ReactNode } from "react";

/** Badge for a single technology. Expects a list parent (<ul>). */
export function Tag({ children }: { children: ReactNode }) {
    return (
        // max-w-full + break-words: some labels are longer than a 320px viewport.
        <li className="max-w-full break-words rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground/80">
            {children}
        </li>
    );
}
