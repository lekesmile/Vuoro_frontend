import React from 'react';
import './App.css';
import Login from './component/Login'
import Header from './component/Header';
import { Route, Switch } from 'react-router-dom'
import Livedemo from './routes/Livedemo'
import Partner from './routes/Partner'
import Signup from './component/Signup'
import Product from './routes/Product'
import Pricing from './routes/Pricing'
import NotFound from './routes/NotFound'

const App = ()=> {
  return (
    <div className="App">

    
     
      <Switch>
        <Route exact path="/" component={Login} />
        <div>
        <Header />
        <Route exact path="/livedemo" component={Livedemo} />
        <Route exact path="/partner" component={Partner} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/signup" component={Signup} />
        </div>
        <Route component={NotFound} />
      </Switch> 


     

    </div>
  );
}

export default App;