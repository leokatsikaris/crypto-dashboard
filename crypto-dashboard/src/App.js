import React from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Route exact path="/" component={Dashboard} />
    </div>
  );
}

export default App;
