// Globals
import './styles.scss';
import React from 'react';

// Components
import { Transition } from 'react-transition-group';
import { Portal } from 'components/Portal';

// Types
import { ModalProps, TEST_IDS } from './types';

// Misc
import clsx from 'clsx';
import { getDocument } from 'ssr-window';

// Component
const Modal: React.FC<ModalProps> = ({ className, children, hide, isVisible }) => {
  // DOM
  const document = getDocument();

  // Handle effect for classList
  React.useEffect(() => {
    const classList = document.querySelector('html')?.classList!;
    const lockClass = 'modal-lock-scroll';

    // Prevent scroll behind modal when open
    if (isVisible) {
      classList.add(lockClass);
    } else {
      classList.remove(lockClass);
    }

    return () => {
      classList.remove(lockClass);
    };
  }, [isVisible]);

  const stopClickBubble = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
  };

  const closeHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    hide();
  };

  // Vars
  const transitionProps = {
    in: isVisible,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: 100
  };

  // Render
  return (
    <Transition {...transitionProps}>
      {(state) => {
        const classes = clsx('app-modal', className, `app-modal-${state}`);
        {
          console.log('Modal showing');
        }
        return (
          <Portal className={classes}>
            <div
              aria-modal="true"
              className="modal-backdrop"
              onClick={stopClickBubble}
              onKeyDown={stopClickBubble}
              role="dialog"
            >
              <div className="modal-container">
                <div
                  className="modal-icon-container"
                  data-test={TEST_IDS.CLOSE}
                  onClick={closeHandler}
                  role="button"
                  tabIndex={0}
                >
                  &times;
                </div>

                {/* Body */}
                {children}
              </div>
            </div>
          </Portal>
        );
      }}
    </Transition>
  );
};

export { Modal };
