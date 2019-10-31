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
import Delete from './component/Delete'
import Edit from './component/Edit'
import Profile from './component/Profile'
import withAuth from './hocs/withAuth'




const App = ()=> {
  return (
    <div className="App">

    
     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <React.Fragment>
        <Header />
        <Route exact path="/livedemo" component={Livedemo} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/partner" component={Partner} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/edit/:id" component={Edit} />
        
        </React.Fragment>
        <Route component={NotFound} />
      </Switch> 


     

    </div>
  );
}

export default App;