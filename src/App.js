import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ScrollToTop from './components/ScrollToTop'

import Nav from './components/nav/nav';
import Main from './pages/Main';
import ProjectTest from './pages/Arcadian/arcadian';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/projectTest' component = {ProjectTest} />
      </Switch>
      <Footer />
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App;
