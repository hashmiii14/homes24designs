interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl`}>
      {eyebrow && (
        <div
          className={`flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-6 sm:w-8 bg-accent" />
          <span className="text-[11px] sm:text-xs font-semibold sm:font-medium tracking-[0.2em] uppercase text-accent">
            {eyebrow}
          </span>
          {align === 'center' && <span className="h-px w-6 sm:w-8 bg-accent" />}
        </div>
      )}
      <h2
        className={`text-section font-light ${
          light ? 'text-ivory' : 'text-charcoal-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed ${
            light ? 'text-stone-200' : 'text-stone-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
