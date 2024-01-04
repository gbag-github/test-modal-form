// Globals
import './styles.scss';
import React from 'react';

// Misc
import clsx from 'clsx';

// Types
interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
  size?: 24 | 40;
  intent?: 'primary' | 'secondary';
  isCentered?: boolean;
}

// Component
const Loading: React.FC<LoadingProps> = ({
  className,
  children,
  isCentered = false,
  intent = 'primary',
  size = 40
}) => {
  // Vars
  const classes = clsx('loading', `loading-${intent}`, className, {
    'loading-centered': isCentered
  });

  // Render
  return (
    <div className={classes}>
      <svg
        className="loading-spinner"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm0-3a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          fill="currentColor"
          fillRule="evenodd"
          opacity=".2"
        />
        <path
          clipRule="evenodd"
          d="M10.5 1.5A1.5 1.5 0 0 1 12 0c6.627 0 12 5.373 12 12a1.5 1.5 0 0 1-3 0 9 9 0 0 0-9-9 1.5 1.5 0 0 1-1.5-1.5Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>

      {children && <h6 className="loading-heading">{children}</h6>}
    </div>
  );
};

export { Loading };
