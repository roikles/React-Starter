'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

import { hashHistory } from 'react-router';
//import Home from './components/home';

var wrapper = document.querySelector("#app");

var { 
    Router,
    Route,
    IndexRoute,
    IndexLink,
    Link 
} = ReactRouter;

var App = React.createClass({
    render: function() {
        return (
            <div>
                Hello world
            </div>
        )
    }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="anotherpage" component={AnotherPage} />
        </Route>
    </Router>,
    wrapper
);
