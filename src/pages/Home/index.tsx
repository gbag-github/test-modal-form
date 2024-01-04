// Globals
import './styles.scss';
import React from 'react';
import ReactHelmet from 'react-helmet';

// Components
import {Page} from 'components/Page';
import {LayoutHeader} from 'layouts/Header';
import {LayoutFooter} from 'layouts/Footer';
import {TestForm} from "pages/Home/TestForm";

function Home(): React.ReactNode {
    // Render
    return (
        <Page className="home">
            <ReactHelmet>
                <title> Test Modal Form </title>
            </ReactHelmet>
            <LayoutHeader/>
            <TestForm/>
            <LayoutFooter/>
        </Page>
    );
}

export {Home};
