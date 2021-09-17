import React, { useState } from "react";
import { Route } from "react-router-dom";
import HomePage from "./homepage";
import OrderForm from "./orderform";
import schema from "./schema";
import * as Yup from 'yup';


const App = () => {
  const initialError = {name:'',}
  const [errors, setErrors] = useState(initialError);
  const [sentOrder, setSentOrder] = useState({});
  
  const validate = (name, value) => {
    Yup.reach(schema, name)
    .validate(value)
    .then(()=> setErrors({...errors, [name]:''}))
    .catch((err)=> setErrors({...errors, [name]:err.errors[0]}))
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path = {'/'}>
        <HomePage/>
      </Route>

      <Route path = {'/pizza/'}>
        <OrderForm errors={errors} validate={validate} sentOrder={sentOrder} setSentOrder={setSentOrder}/>
      </Route>

      <Route path = {'/confirmation/'}>
        <OrderForm  sentOrder={sentOrder}/>
      </Route>
    </>
  );
};
export default App;
// https://reqres.in/api/orders