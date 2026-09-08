import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'header-adaptive';
  transparent?: boolean;
  size?: 'sm' | 'md' | 'lg';
  linkTo?: string | null;
  className?: string;
  onClick?: () => void;
  hideIcon?: boolean;
}

export default function Logo({
  variant = 'dark',
  transparent = false,
  size = 'md',
  linkTo = '/',
  className = '',
  onClick,
  hideIcon = false,
}: LogoProps) {
  const [imgError, setImgError] = useState(false);

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
      icon: 'w-7 h-7',
    },
    md: {
      homes: 'text-xl md:text-2xl tracking-[0.12em]',
      twentyFour: 'tracking-[0.16em]',
      designs: 'text-[8.5px] md:text-[9.5px] tracking-[0.38em] mt-0.5',
      icon: 'w-8 h-8 md:w-9 md:h-9',
    },
    lg: {
      homes: 'text-2xl md:text-3xl tracking-[0.12em]',
      twentyFour: 'tracking-[0.16em]',
      designs: 'text-[9.5px] md:text-[11px] tracking-[0.38em] mt-1',
      icon: 'w-11 h-11',
    },
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 leading-none select-none ${className}`}>
      {!hideIcon && !imgError && (
        <img
          src="/logo.png"
          alt="HOMES24DESIGNS logo"
          className={`${sizeClasses.icon} object-cover rounded-xs shrink-0 border border-accent/40 shadow-2xs`}
          onError={() => setImgError(true)}
        />
      )}
      <div className="flex flex-col leading-none">
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
