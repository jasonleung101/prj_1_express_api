import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/navbar';

//views
import Home from './views/home';
import WeatherForcast from './views/weatherForcast';
import UserList from './views/user';

ReactDOM.render(
  <Router>
    <App>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/weatherForcast' component={WeatherForcast} />
      <Route exact path='/user' component={UserList} />
    </App>
  </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
