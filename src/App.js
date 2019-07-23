import React from 'react';
import { HashRouter as Router , Route} from 'react-router-dom';
import Login from './login/login.js';
import Home from './home'
import './css/commont.css'
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Route path={'/login'}  component={Login}></Route>
        <Route path={'/index'} component={Home}></Route>
        <Route path={'/'} exact component={Home}></Route>
     </Router>
    </div>
  );
}

export default App;
