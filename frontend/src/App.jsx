// frontendV2/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentsPage from './pages/StudentsPage';
import StudentInfo from './pages/StudentInfo';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={StudentsPage} />
          <Route exact path="/students" component={StudentsPage} />
          <Route path="/students/:id" component={StudentInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
