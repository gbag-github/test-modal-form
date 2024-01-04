// Globals
import React, { useEffect, useState, ReactNode } from 'react';

// Misc
import { createPortal } from 'react-dom';
import { getDocument } from 'ssr-window';

// Props
interface PortalProps {
  className: string;
  children: ReactNode;
}

// Component
const Portal: React.FC<PortalProps> = ({ className, children }) => {
  // DOM
  const document = getDocument();

  // Hooks - state
  const [root] = useState<Element | null>(document.querySelector('#root'));
  const [portal] = useState<HTMLElement>(document.createElement('div'));

  // Hooks - effects
  useEffect(() => {
    // eslint-disable-next-line unicorn/prefer-dom-node-append
    root?.appendChild(portal);

    return () => {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      root?.removeChild(portal);
    };
  }, [portal, root]);

  // Render
  portal.className = className;
  return createPortal(children, portal);
};

export { Portal };
