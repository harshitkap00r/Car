import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Car from './components/Car/Car';
import allCar from './components/allCar/allCar';
import details from './components/Cardetails/Cardetails';
import configuration from './components/configuration/configuration';
import orderComplete from './components/order/orderComplete';


const App=()=> {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Car}/>
      <Route exact path='/allCar' component={allCar}/>
      <Route exact path='/cardetails/:key' component={details}/>
      <Route exact path='/cardetails/:key/configuration' component={configuration}/>
      <Route exact path='/orderComplete/:key' component={orderComplete}/>
    </Switch>
    </>
  );
}

export default App;
