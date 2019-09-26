import * as React from 'react';

import './Home.scss';

export default class Home extends React.Component<any, any> {

    public render() {
        const { t } = this.props;

        return (
            <div className='home-page demos'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='item text-center'>
                            <a href='index0.html' target='_blank'>
                                <img src={'../../assets/img/banner.jpg'}></img>
                                <h5>Home One</h5>
                            </a>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='item text-center'>
                            <a href='index1.html' target='_blank'>
                                <img src={'../../assets/img/mobile.jpg'}>
                                </img>
                                <h5>Home Two</h5>
                            </a>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='item text-center'>
                            <a href='index2.html' target='_blank'>
                                <img src={'../../assets/img/wesolve-banner.png'}>
                                </img>
                                <h5>Home Three</h5>
                            </a>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='item text-center'>
                            <a href='index3.html' target='_blank'>
                                <img src={'../../assets/img/wesolve-banner.png'}>
                                </img>
                                <h5>Home Four</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
