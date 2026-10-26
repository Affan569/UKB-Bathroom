import Link from "next/link";
import { inter } from "./fonts";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ServiceBreadcrumbProps {
  items: BreadcrumbItem[];
  eyebrow?: string;
}

export default function ServiceBreadcrumb({ items, eyebrow }: ServiceBreadcrumbProps) {
  return (
    <div>
      {eyebrow && (
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-8">
          <span className={`${inter.className} inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0B86EE]`}>
            {eyebrow}
          </span>
        </div>
      )}
      <nav aria-label="Breadcrumb" className="bg-slate-50 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ol className="flex items-center gap-2 text-sm">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {index === items.length - 1 ? (
                  <span className={`${inter.className} font-medium text-slate-900`}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`${inter.className} text-slate-600 hover:text-[#0B86EE] transition-colors`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
}
