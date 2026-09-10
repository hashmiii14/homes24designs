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
  size = 'md',
  linkTo = '/',
  className = '',
  onClick,
}: LogoProps) {
  const [imgError, setImgError] = useState(false);

  // Responsive dimensions tailored to display the uncropped 1024x1024 logo sharply
  const containerClasses = {
    sm: 'h-10 w-28 sm:h-11 sm:w-32',
    md: 'h-13 w-36 sm:h-14 sm:w-42 md:h-16 md:w-48 lg:h-18 lg:w-52',
    lg: 'h-16 w-44 sm:h-20 sm:w-52 md:h-22 md:w-56',
  }[size];

  const content = (
    <div
      className={`relative overflow-hidden flex items-center justify-center bg-black select-none shrink-0 ${containerClasses} ${className}`}
      style={{ backgroundColor: '#000000' }}
    >
      {!imgError ? (
        <img
          src="/logo.png"
          alt="HOMES24DESIGNS"
          className="w-[130%] h-auto max-w-none object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="eager"
          decoding="sync"
        />
      ) : (
        <div className="flex flex-col items-center justify-center leading-none text-center px-2">
          <span className="font-serif font-normal uppercase tracking-[0.14em] text-ivory text-base sm:text-lg">
            HOMES<span className="text-accent font-light">24</span>
          </span>
          <span className="text-[7.5px] uppercase tracking-[0.38em] font-sans font-semibold text-accent mt-0.5">
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
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="HOMES24DESIGNS home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
