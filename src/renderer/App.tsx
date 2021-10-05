import routes from 'constants/routes';
import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Sidebar from './components/sidebar';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen v-screen">
        <Sidebar />
        <Switch>
          {routes.map(({ path, exact, component, label }) => (
            <Route
              key={label}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
