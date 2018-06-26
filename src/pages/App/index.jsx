import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound, About, Main, Cart } from '../index';

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
          <Route exact path="/Cart" component={Cart}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;