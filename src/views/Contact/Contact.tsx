import * as React from 'react';

import { Translation } from 'react-i18next';

import Footer from '../../components/Footer/Footer';

import './Contact.scss';

import '../../vendor/animate/animate.scss';
import '../../vendor/css-hamburgers/hamburgers.min.scss';
import '../../vendor/animsition/css/animsition.min.scss';
import '../../vendor/select2/select2.min.scss';
import '../../vendor/daterangepicker/daterangepicker.scss';
import '../../custom/main.scss';
import '../../custom/util.scss';

import '../../custom/validate.js';

import Navbar from '../../components/Navbar/Navbar';

export default class Contact extends React.Component<any, any> {

    public render() {
        return (
            <Translation>
                {
                    (t, { i18n }) => (
                        <div className='contact-page'>
                            <Navbar />

                            <div className='container-contact100'>
                                <div className='wrap-contact100'>
                                    <div className='contact100-form-title'
                                        style={{ backgroundImage: 'url(../../../../assets/img/banner.jpg)' }}>
                                        <span className='contact100-form-title-1'>
                                            {t('contactUs')}
                                        </span>

                                        <span className='contact100-form-title-2'>
                                            {t('contactUsDescription')}
                                        </span>
                                    </div>

                                    <form className='contact100-form validate-form'>
                                        <div className='wrap-input100 validate-input'
                                            data-validate={t('nameIsRequired')}>
                                            <span className='label-input100'>{t('fullName')}:</span>
                                            <input className='input100' type='text'
                                                name='name' placeholder={t('enterFullName')} />
                                            <span className='focus-input100'></span>
                                        </div>

                                        <div className='wrap-input100 validate-input'
                                            data-validate={t('validEmailRequired')}>
                                            <span className='label-input100'>{t('email')}:</span>
                                            <input className='input100' type='text'
                                                name='email' placeholder={t('enterEmailAddress')} />
                                            <span className='focus-input100'></span>
                                        </div>

                                        <div className='wrap-input100 validate-input'
                                            data-validate={t('phoneIsRequired')}>
                                            <span className='label-input100'>{t('phone')}:</span>
                                            <input className='input100' type='text'
                                                name='phone' placeholder={t('enterPhoneNumber')} />
                                            <span className='focus-input100'></span>
                                        </div>

                                        <div className='wrap-input100 validate-input'
                                            data-validate={t('messageIsRequired')}>
                                            <span className='label-input100'>{t('message')}:</span>
                                            <textarea className='input100' name='message'
                                                placeholder={t('yourComment')}></textarea>
                                            <span className='focus-input100'></span>
                                        </div>

                                        <div className='container-contact100-form-btn'>
                                            <button className='contact100-form-btn'>
                                                <span>
                                                    {t('submit')}
                                                    <i className='fa fa-long-arrow-right m-l-7' aria-hidden='true'></i>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <Footer />
                        </div>
                    )
                }
            </Translation>
        );
    }
}
