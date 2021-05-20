import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './Front/redux/reducer'

const store = createStore(reducer);
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                            hello
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render( <Provider store = {store}><App /></Provider>, document.getElementById('root'));
}
