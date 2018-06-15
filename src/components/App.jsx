import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
    render() {
        return (
            <h1>My ReactJS App!!</h1>
        )
    }
}

render(<App />, document.getElementById('container-app'))
