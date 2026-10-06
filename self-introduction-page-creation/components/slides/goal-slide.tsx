import { SlideHeading } from './slide-heading'

const steps = [
  {
    when: 'Short term',
    text: 'Earn a security certification and keep competing in CTF challenges.',
  },
  {
    when: 'Mid term',
    text: 'Gain hands-on experience through a security internship.',
  },
  {
    when: 'Long term',
    text: 'Become a trusted security engineer who protects people and their data.',
  },
]

export function GoalSlide() {
  return (
    <div>
      <SlideHeading number="04" title="Goal" />
      <blockquote className="mb-10 font-serif text-2xl leading-snug text-foreground text-balance md:text-4xl">
        {'"I want to build a safer digital world, one system at a time."'}
      </blockquote>
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map(({ when, text }, i) => (
          <li
            key={when}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
          >
            <span className="font-mono text-3xl text-primary">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
              {when}
            </h3>
            <p className="leading-relaxed text-card-foreground text-pretty">
              {text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
