import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import ContactPage from '../pages/ContactPage.jsx';

export default class Main extends React.Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
            </div>
        )
    }
}
