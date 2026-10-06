import Image from 'next/image'
import { GraduationCap, Headphones, Lightbulb, ShieldCheck, Music } from 'lucide-react'
import { SlideHeading } from './slide-heading'

const facts = [
  { icon: ShieldCheck, label: 'Major', value: 'Cyber-Security' },
  { icon: GraduationCap, label: 'Year', value: '2nd Year Student' },
  { icon: Headphones, label: 'Hobby', value: 'Listening to music' },
  {
    icon: Lightbulb,
    label: 'Interests',
    value: 'Network security, ethical hacking, digital forensics',
  },
]

export function AboutSlide() {
  return (
    <div>
      <SlideHeading number="01" title="About Me" />
      <div className="grid gap-6 md:grid-cols-5">
        <ul className="grid gap-4 sm:grid-cols-2 md:col-span-3">
          {facts.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="font-medium leading-snug text-card-foreground">
                  {value}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card md:col-span-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/twilight.png"
              alt="Soft twilight sky with a crescent moon"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="flex flex-col gap-1 p-5">
            <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Music className="size-3.5 text-primary" aria-hidden="true" />
              Favorite song
            </span>
            <span className="font-serif text-2xl text-card-foreground">
              twilight zone
            </span>
            <span className="text-sm text-muted-foreground">Ariana Grande</span>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
