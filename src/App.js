import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./homepage";
import OrderForm from "./orderform";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path = {'/'}>
        <HomePage/>
      </Route>

      <Route path = {'/pizza/'}>
        <OrderForm/>
      </Route>
    </>
  );
};
export default App;
// https://reqres.in/api/orders