import * as React from 'react';

import { Translation } from 'react-i18next';

export default class Footer extends React.Component<any, any> {

    public render() {

        return (
            <Translation>
                {
                    (t, { i18n }) =>
                        (<footer className='text-center'>
                            <div className='container'>
                                <div className='social'>
                                    <a href='' className='icon'>
                                        <i className='fa fa-facebook'></i>
                                    </a>
                                    <a href='' className='icon'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                    <a href='' className='icon'>
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                    <a href='' className='icon'>
                                        <i className='fa fa-behance'></i>
                                    </a>
                                    <a href='' className='icon'>
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                </div>

                                <hr className='bg-white'></hr>
                                <p>© 2019 Wesolve Code - All Right Reserved</p>

                            </div>
                        </footer>)
                }
            </Translation>
        );
    }
}
