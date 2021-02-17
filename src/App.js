import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ScrollToTop from './components/ScrollToTop'

import Nav from './components/nav/nav';
import Main from './pages/Main';
import Arcadian from './pages/Arcadian/arcadian';
import Babel from './pages/Babel/babel';
import Bannock from './pages/Bannock/bannock';
import Buffo from './pages/Buffo/buffo';
import Canteen from './pages/Canteen/canteen';
import DefaultWTF from './pages/DefaultWTF/defaultWTF';
import LittleFoot from './pages/LittleFoot/littleFoot';
import Seakura from './pages/Seakura/seakura';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/arcadian' component={Arcadian} />
          <Route path='/babel' component={Babel} />
          <Route path='/bannock' component={Bannock} />
          <Route path='/buffo' component={Buffo} />
          <Route path='/canteen' component={Canteen} />
          <Route path='/defaultWTF' component={DefaultWTF} />
          <Route path='/littleFoot' component={LittleFoot} />
          <Route path='/seakura' component={Seakura} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App;
