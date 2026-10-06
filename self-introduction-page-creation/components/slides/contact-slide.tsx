import { ArrowUpRight, Mail } from 'lucide-react'
import { SlideHeading } from './slide-heading'

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

const contacts = [
  {
    label: 'Email',
    value: 'chohe27@naver.com',
    href: 'mailto:chohe27@naver.com',
    icon: <Mail className="size-5" aria-hidden="true" />,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/freelis9595',
    href: 'https://github.com/freelis9595',
    icon: <GitHubMark className="size-5" />,
    external: true,
  },
]

export function ContactSlide() {
  return (
    <div className="flex flex-col items-center text-center">
      <SlideHeading number="05" title="Let's Connect" />
      <p className="-mt-4 mb-10 max-w-md leading-relaxed text-muted-foreground text-pretty">
        Feel free to reach out about security, projects, or your favorite
        Ariana Grande song.
      </p>
      <ul className="flex w-full max-w-xl flex-col gap-4">
        {contacts.map(({ label, value, href, icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-primary"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                {icon}
              </span>
              <span className="flex flex-1 flex-col">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="font-medium text-card-foreground">{value}</span>
              </span>
              <ArrowUpRight
                className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-sm text-muted-foreground">Thanks for stopping by.</p>
    </div>
  )
}
