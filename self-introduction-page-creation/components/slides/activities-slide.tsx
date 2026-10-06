import { FolderGit2, Users } from 'lucide-react'
import { SlideHeading } from './slide-heading'

const activities = [
  {
    icon: Users,
    tag: 'Student Council',
    title: 'Department Student Council Member',
    description:
      'Helping plan department events, connect students with each other, and share their voices with the school.',
  },
  {
    icon: FolderGit2,
    tag: 'Project',
    title: 'Network Packet Analysis',
    description:
      'Captured and analyzed network traffic with Wireshark to spot suspicious patterns and understand common attacks.',
  },
  {
    icon: FolderGit2,
    tag: 'Project',
    title: 'Personal Portfolio Website',
    description:
      'Designed and built this self-introduction site to share who I am and what I am working on.',
  },
]

export function ActivitiesSlide() {
  return (
    <div>
      <SlideHeading
        number="03"
        title="Activities"
        subtitle="Things I take part in outside of class."
      />
      <ol className="flex flex-col gap-4">
        {activities.map(({ icon: Icon, tag, title, description }) => (
          <li
            key={title}
            className="flex gap-4 rounded-2xl border border-border bg-card p-5 md:items-center md:p-6"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-primary">
                {tag}
              </span>
              <h3 className="font-medium text-card-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
