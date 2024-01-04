// Globals
import './styles.scss';
import React from 'react';
import clsx from 'clsx';
import { TEST_IDS } from 'components/Modal/types';

interface ModalBodyProps {
  className?: string;
  children: React.ReactNode;
}

// Component
const ModalBody: React.FC<ModalBodyProps> = (props) => {
  const className = clsx(props.className, 'modal_body');

  return (
    <div className={className}>
      <div className="modal-content" data-test={TEST_IDS.MODAL}>
        {props.children}
      </div>
    </div>
  );
};

export { ModalBody };
