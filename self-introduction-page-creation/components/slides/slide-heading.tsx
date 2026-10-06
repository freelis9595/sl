export function SlideHeading({
  number,
  title,
  subtitle,
}: {
  number: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8 flex flex-col gap-2 md:mb-10">
      <span className="font-mono text-sm tracking-widest text-primary">
        {number}
      </span>
      <h2 className="font-serif text-4xl text-foreground text-balance md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl leading-relaxed text-muted-foreground text-pretty">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
