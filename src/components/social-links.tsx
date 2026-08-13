import { socialLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Icon-only links. Each carries an aria-label since there is no visible text. */
export function SocialLinks({ className }: { className?: string }) {
    return (
        <ul className={cn("flex items-center gap-1", className)}>
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                    <a
                        href={href}
                        aria-label={label}
                        {...(external
                            ? { target: "_blank", rel: "noreferrer noopener" }
                            : {})}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground"
                    >
                        <Icon
                            aria-hidden="true"
                            className="h-[18px] w-[18px]"
                            strokeWidth={1.75}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
