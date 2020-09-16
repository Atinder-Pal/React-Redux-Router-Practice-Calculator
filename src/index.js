import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
import { createStore } from 'redux';
import calculationsReducer from './reducers/calculations';
import { Provider } from 'react-redux';
import CalculationsHistory from './components/CalculationsHistory';
import SingleFieldCalculator from './components/SingleFieldCalculator';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Create store  and pass our calculationsReducer to it so it knows how to handle actions
const calculationsStore = createStore( calculationsReducer, 
//to use the Redux DevTools, add this argument as well! 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


  // Just to test if store is getting updated
calculationsStore.subscribe( () => console.log( calculationsStore.getState() ));



ReactDOM.render(
   <Provider store = {calculationsStore}>
      {/* <Calculator heading="Welcome to Math Buddy"/>
      <CalculationsHistory /> */}
      <Router>
        <Nav  heading="Welcome to Math Buddy"/>
        <Route path ="/" component = {SingleFieldCalculator} exact  />
        <Route path = "/calculations-history"> <CalculationsHistory /> </Route>
      </Router>   
      
   </Provider>,  
  document.getElementById('root')
);

