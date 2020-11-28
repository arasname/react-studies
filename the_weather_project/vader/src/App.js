import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Start from './components/start';
import Rest from './components/rest';
import Hooks from './components/hooks';
import './css/foundation.css';
import './App.css';
import './css/app.css';


function App() {
  return (
    <Router>
        <div>
          <h2>Chass Väder Projekt</h2>
          <nav>
          <ul className="menu  align-center">
            <li><Link to={'/'}> Start </Link></li>
            <li><Link to={'/rest'} className="nav-link">Rest</Link></li>
            <li><Link to={'/hooks'} className="nav-link">Hooks</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Start} />
              <Route path='/rest' component={Rest} />
              <Route path='/hooks' component={Hooks} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
