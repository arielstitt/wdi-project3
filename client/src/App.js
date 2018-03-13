import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import SingleUser from './components/SingleUser'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path='/users' component={Users}/>
          <Route exact path='/users/:userId' component={SingleUser}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
