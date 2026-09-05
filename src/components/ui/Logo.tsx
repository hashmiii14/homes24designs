import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'header-adaptive';
  transparent?: boolean;
  size?: 'sm' | 'md' | 'lg';
  linkTo?: string | null;
  className?: string;
  onClick?: () => void;
}

export default function Logo({
  variant = 'dark',
  transparent = false,
  size = 'md',
  linkTo = '/',
  className = '',
  onClick,
}: LogoProps) {
  const mainTextColor =
    variant === 'header-adaptive'
      ? transparent
        ? 'text-ivory'
        : 'text-charcoal-900'
      : variant === 'light'
      ? 'text-ivory'
      : 'text-charcoal-900';

  const subTextColor =
    variant === 'header-adaptive'
      ? transparent
        ? 'text-stone-300'
        : 'text-accent'
      : 'text-accent';

  const sizeClasses = {
    sm: {
      homes: 'text-lg md:text-xl tracking-[0.12em]',
      twentyFour: 'tracking-[0.16em]',
      designs: 'text-[8px] md:text-[8.5px] tracking-[0.38em] mt-0.5',
    },
    md: {
      homes: 'text-xl md:text-2xl tracking-[0.12em]',
      twentyFour: 'tracking-[0.16em]',
      designs: 'text-[8.5px] md:text-[9.5px] tracking-[0.38em] mt-0.5',
    },
    lg: {
      homes: 'text-2xl md:text-3xl tracking-[0.12em]',
      twentyFour: 'tracking-[0.16em]',
      designs: 'text-[9.5px] md:text-[11px] tracking-[0.38em] mt-1',
    },
  }[size];

  const content = (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span
        className={`font-serif font-normal uppercase transition-colors duration-300 ${sizeClasses.homes} ${mainTextColor}`}
      >
        HOMES<span className={`font-light text-accent ${sizeClasses.twentyFour}`}>24</span>
      </span>
      <span
        className={`uppercase font-semibold font-sans transition-colors duration-300 ${sizeClasses.designs} ${subTextColor}`}
      >
        DESIGNS
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        onClick={onClick}
        className="group inline-block focus:outline-none"
        aria-label="HOMES24DESIGNS home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
