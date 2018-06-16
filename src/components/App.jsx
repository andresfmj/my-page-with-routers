// Import needed libraries
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Now I going to import any Component needed in the App here
import Header from './commons/Header.jsx';
import Main from './commons/Main.jsx';


// Initializing my App at this point!
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

// render the App Component into the real html dom
render(<App />, document.getElementById('container-app'))
