import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Layout from './components/Layout/Layout';

import './style/site.scss';
import './locale/i18n';

const history = createBrowserHistory();

const HomeComponent = withTranslation()(Home);

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/home' />
            </Route>
            <Layout path='/home' component={HomeComponent} />
            <Layout path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>
    </Router>,
    document.getElementById('root'));
