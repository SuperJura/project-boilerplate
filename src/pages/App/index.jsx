import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound, About, Main } from '../index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {
            // Define all your routes here
          }
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
