import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Nav from './components/nav/nav';
import Main from './pages/Main';
import ProjectTest from './pages/ProjectTest/projectTest';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/projectTest' component = {ProjectTest} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
