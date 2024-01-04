import './styles.scss';
import React, {FC} from 'react';

// Components
import {Input} from 'components/Input';
import {Button} from 'components/Button';
import {Form} from "components/Form";

export interface ModalTestFormProps {
    onSubmit: () => void;
    initialValues: {};
}

const ModalTestForm: FC<ModalTestFormProps> = ({onSubmit, initialValues}) => {
    const formProps = {
        className: 'modal-test_form',
        id: 'modal-test_form',
        name: 'modal-test_form',
        data: initialValues,
        onSubmit: onSubmit,
    };

    return (
        <Form {...formProps}>
            <div className="modal-test_form_input-group modal-test_form_button-group-top">
                <Input
                    className="modal-test_form_input"
                    label="changeType"
                    name="changeType"
                    placeholder=""
                    type="text"
                />
                <Input
                    className="modal-test_form_input"
                    label="changeType"
                    name="changeType"
                    placeholder=""
                    type="text"
                />
            </div>

            <div className="modal-test_form-middle-box">
                <div className="modal-test_form-middle-box-left">
                    <div className="modal-test_form-middle-box-left-inputs">
                        <h3 className="title">Current</h3>
                        <div className="modal-test_form_input-group">
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp1"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp2"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp3"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp4"
                                placeholder=""
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                <div className="modal-test_form-middle-box-right">
                    <div className="modal-test_form-middle-box-right-inputs">
                        <h3 className="title">Future</h3>
                        <div className="modal-test_form_input-group">
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp5"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp6"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp7"
                                placeholder=""
                                type="text"
                            />
                            <Input
                                className="modal-test_form_input"
                                label="Label"
                                name="inp8"
                                placeholder=""
                                type="text"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-test_form_input-description">
                <h3 className="title">Description</h3>
                <div className="modal-test_form_input-group">
                    <Input
                        className="modal-test_form_input"
                        label=""
                        name="desctiption"
                        placeholder=""
                        type="text"
                    />
                </div>
            </div>

            <div className="modal-test_form_button-group">
                <Button className="modal-test_form_button" display="inline" intent="primary" type="button">
                   Button
                </Button>
                <Button className="modal-test_form_button" display="inline" intent="primary" type="submit">
                    Button
                </Button>
            </div>
        </Form>
    );
};

export {ModalTestForm};
