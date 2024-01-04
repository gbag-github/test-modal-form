import React from 'react';
import {PropsPage} from "./types";
import clsx from "clsx";
import ReactHelmet from 'react-helmet';

export const Page: React.FC<PropsPage> = ({className = '', children}) => {
    const classes = clsx('page', className);

    return (
        <div className={classes}>
            <ReactHelmet>
                <title>Test Form</title>
            </ReactHelmet>
            {children}
        </div>
    );
}
