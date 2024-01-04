import './styles.scss';
import React from 'react';

// Components
import {Modal} from 'components/Modal';
import {ModalBody} from 'components/Modal/Body';
import {ModalTestForm} from './Form';

export interface ModalTestFormProps {
    handleCloseModal: () => void;
    handleSubmit: () => void;
}

const ModalTest: React.FC<ModalTestFormProps> = ({handleCloseModal}) => {
    const handleSubmit = () => {
        console.log('form submitted !');
    };

    return (
        <Modal className="modal-test_form" hide={handleCloseModal} isClosable={true} isVisible={true}>
            <ModalBody>
                <ModalTestForm onSubmit={handleSubmit} initialValues={{}}/>
            </ModalBody>
        </Modal>
    );
};

export {ModalTest};
