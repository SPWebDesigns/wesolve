import * as React from 'react';

import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';

export default class Navbar extends React.Component<any, any> {

    public render() {

        return (
            <Translation>
                {
                    (t, { i18n }) =>
                        (<nav className='navbar navbar-expand-sm bg-black navbar-dark'>
                            <a className='navbar-brand' href='#'>Wesolve Code</a>
                            <button className='navbar-toggler' type='button' data-toggle='collapse'
                                data-target='#navbarSupportedContent'
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false' aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'></span>
                            </button>

                            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item active'>
                                        <Link className='nav-link' to='/'>{t('home')}
                                            <span className='sr-only'>(current)</span></Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/about'>{t('about')}</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/customers'>{t('customer')}</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/contact'>{t('contact')}</Link>
                                    </li>
                                </ul>
                                <form className='form-inline my-2 my-lg-0'>
                                    <span className='text-white mr-3'>{t('language')}</span>
                                    <SwitchLanguage />
                                </form>
                            </div>
                        </nav>)
                }
            </Translation>
        );
    }
}
