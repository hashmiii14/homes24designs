import { useState } from 'react';
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
  const [imgError, setImgError] = useState(false);

  const isLight =
    variant === 'header-adaptive' ? transparent : variant === 'light';

  const logoSrc = isLight ? '/logo-white.png' : '/logo-dark.png';

  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10 md:h-12',
    lg: 'h-12 sm:h-14 md:h-16',
  }[size];

  const content = (
    <div className={`inline-flex items-center leading-none select-none ${className}`}>
      {!imgError ? (
        <img
          src={logoSrc}
          alt="HOMES24DESIGNS"
          className={`${sizeClasses} w-auto object-contain transition-opacity duration-300`}
          onError={() => setImgError(true)}
          loading="eager"
        />
      ) : (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif font-normal uppercase tracking-[0.14em] ${
              isLight ? 'text-ivory' : 'text-charcoal-900'
            } text-lg md:text-xl`}
          >
            HOMES<span className="text-accent font-light">24</span>
          </span>
          <span
            className="text-[8px] md:text-[9px] uppercase tracking-[0.38em] font-sans font-semibold text-accent mt-0.5"
          >
            DESIGNS
          </span>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        onClick={onClick}
        className="group inline-flex items-center focus:outline-none"
        aria-label="HOMES24DESIGNS home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
