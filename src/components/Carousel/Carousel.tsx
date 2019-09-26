import * as React from 'react';

import './Carousel.scss';
import { Translation } from 'react-i18next';

export default class Carousel extends React.Component<any, any> {

    public render() {
        return (
            <Translation>
                {
                    (t: any) =>
                        (<header className='header valign bg-img'
                            style={{
                                backgroundImage: 'url(../../../../assets/img/banner.jpg)',
                                backgroundPosition: '0px 0px',
                            }}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-sm-12 text-center caption'>
                                        <h1 className='wesolve-text'>Wesolve Code</h1>
                                        <h6 className='description-text'>Software Factory</h6>
                                        <a href='' className='butn radius butn-bg'>
                                            <span>{t('contactUs')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='curve curve-bottom curve-center'></div>
                        </header>)
                }
            </Translation>
        );
    }
}

