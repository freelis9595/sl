'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { IntroSlide } from '@/components/slides/intro-slide'
import { AboutSlide } from '@/components/slides/about-slide'
import { SkillsSlide } from '@/components/slides/skills-slide'
import { ActivitiesSlide } from '@/components/slides/activities-slide'
import { GoalSlide } from '@/components/slides/goal-slide'
import { ContactSlide } from '@/components/slides/contact-slide'

const SLIDE_TITLES = [
  'Intro',
  'About Me',
  'Skills',
  'Activities',
  'Goal',
  'Contact',
]

export function SlideDeck() {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const total = SLIDE_TITLES.length

  const goTo = useCallback(
    (next: number) => setIndex(Math.min(Math.max(next, 0), total - 1)),
    [total],
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') next()
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const slides = [
    <IntroSlide key="intro" onStart={next} />,
    <AboutSlide key="about" />,
    <SkillsSlide key="skills" />,
    <ActivitiesSlide key="activities" />,
    <GoalSlide key="goal" />,
    <ContactSlide key="contact" />,
  ]

  return (
    <main
      className="flex h-dvh flex-col overflow-hidden bg-background"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const diff = e.changedTouches[0].clientX - touchStartX.current
        if (diff < -50) next()
        if (diff > 50) prev()
        touchStartX.current = null
      }}
    >
      <div
        className="h-1 bg-primary transition-all duration-500 ease-out"
        style={{ width: `${((index + 1) / total) * 100}%` }}
        aria-hidden="true"
      />

      <header className="flex items-center justify-between px-6 py-4 md:px-10">
        <button
          type="button"
          onClick={() => goTo(0)}
          className="font-serif text-xl text-foreground"
          aria-label="Go to first slide"
        >
          Haeun Cho
        </button>
        <nav aria-label="Slides" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SLIDE_TITLES.map((title, i) => (
              <li key={title}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={i === index ? 'step' : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    i === index
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-sm text-muted-foreground" aria-live="polite">
          <span className="sr-only">Slide </span>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
      </header>

      <div className="relative flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <section
              key={SLIDE_TITLES[i]}
              aria-label={SLIDE_TITLES[i]}
              aria-hidden={i !== index}
              inert={i !== index}
              className={`h-full w-full shrink-0 overflow-y-auto transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex min-h-full items-center justify-center px-6 py-10 md:px-10">
                <div className="w-full max-w-4xl">{slide}</div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <footer className="flex items-center justify-between gap-4 px-6 py-5 md:px-10">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Prev</span>
        </button>

        <div className="flex items-center gap-2">
          {SLIDE_TITLES.map((title, i) => (
            <button
              key={title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
        >
          <span>{index < total - 1 ? SLIDE_TITLES[index + 1] : 'Next'}</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </footer>
    </main>
  )
}
