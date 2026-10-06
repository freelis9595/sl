import { Code2, Network, ShieldAlert, Terminal } from 'lucide-react'
import { SlideHeading } from './slide-heading'

const skills = [
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'C', 'HTML / CSS'],
  },
  {
    icon: Terminal,
    title: 'Systems',
    items: ['Linux command line', 'Kali Linux', 'Git & GitHub'],
  },
  {
    icon: Network,
    title: 'Networking',
    items: ['TCP/IP fundamentals', 'Wireshark packet analysis'],
  },
  {
    icon: ShieldAlert,
    title: 'Security',
    items: ['Web vulnerabilities (OWASP Top 10)', 'CTF problem solving'],
  },
]

export function SkillsSlide() {
  return (
    <div>
      <SlideHeading
        number="02"
        title="Skills"
        subtitle="The tools and topics I work with as I grow as a security engineer."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {skills.map(({ icon: Icon, title, items }) => (
          <li
            key={title}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-medium text-card-foreground">{title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
