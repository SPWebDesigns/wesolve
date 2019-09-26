import * as React from 'react';

import { Translation } from 'react-i18next';

import './SwitchLanguage.scss';

export type languageType = 'es-ES' | 'en-US';

interface IChangeLanguageProps {
    lang?: languageType;
}

export default class SwitchLanguage extends React.Component<IChangeLanguageProps, any> {

    constructor(props) {
        super(props);

        this.state = { lang: 'en-US' };

        this.handleChange = this.handleChange.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    public render() {
        return (
            <Translation>
                {
                    (t, { i18n }) =>
                        (<div className='switch-language'>
                            <select className='form-control mr-sm-2' onChange={(e) => this.handleChange(e, i18n)}>
                                <option value='en-US'>{t('english')}</option>
                                <option value='es-ES'>{t('spanish')}</option>
                            </select>
                        </div>)
                }
            </Translation>
        );
    }

    public handleChange(event: any, i18n: any) {
        this.setState({ lang: event.target.value },
            () => {
                this.changeLanguage(i18n);
            });
    }

    public changeLanguage(i18n: any): any {
        i18n.changeLanguage(this.state.lang);
    }
}
