import { ArrowRight } from 'lucide-react'

export function IntroSlide({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div
        aria-hidden="true"
        className="flex size-28 items-center justify-center rounded-full bg-primary font-serif text-4xl text-primary-foreground shadow-lg shadow-primary/30"
      >
        HC
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {"Hello, I'm"}
        </p>
        <h1 className="font-serif text-6xl text-foreground text-balance md:text-8xl">
          Haeun Cho
        </h1>
      </div>
      <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
        A cyber-security student who protects systems by day and listens to
        Ariana Grande by night.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:scale-105"
      >
        Get to know me
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
