import * as React from 'react';

import { Route } from 'react-router-dom';
import { Translation } from 'react-i18next';

import Carousel from '../../components/Carousel/Carousel';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const LayoutContent = ({ children }) => {
    return (
        <Translation>
            {
                (t, { i18n }) =>
                    (<div>
                        <Navbar />
                        <Carousel></Carousel>
                        <div className='container mt-5 mb-5'>
                            {children}
                        </div>
                        <Footer />
                    </div>)
            }
        </Translation>);
};

// tslint:disable-next-line:no-shadowed-variable
const Layout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(matchProps) => (
            <LayoutContent>
                <Component {...matchProps} />
            </LayoutContent>
        )} />
    );
};

export default Layout;
