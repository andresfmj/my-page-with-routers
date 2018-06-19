import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import InfoPage from '../pages/InfoPage.jsx';

export default class Main extends React.Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route exact path='/~ferdroid/mi-pagina-react-router/' component={Home} />
                    <Route path='/~ferdroid/mi-pagina-react-router/contact' component={ContactPage} />
                    <Route path='/~ferdroid/mi-pagina-react-router/info' component={InfoPage} />
                </Switch>
            </div>
        )
    }
}
