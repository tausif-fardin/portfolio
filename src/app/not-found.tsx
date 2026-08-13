import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <div className="container-content flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
            <p className="eyebrow">404</p>
            <h1 className="text-2xl font-semibold tracking-tight">
                Page not found
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
                That page does not exist, or it has moved somewhere else.
            </p>
            <Link
                href="/"
                className="mt-2 inline-flex h-10 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
                Back to home
            </Link>
        </div>
    );
}
