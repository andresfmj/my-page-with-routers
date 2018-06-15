import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';




class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link"><span className="sr-only">(current)</span>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Contact us!</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        )
    }
}



class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the Home page!</h2>
            </div>
        )
    }
}


class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the page where you can contact us!</h2>
            </div>
        )
    }
}


class Main extends React.Component {
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



export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Main />
                </div>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('container-app'))
