import React from "react";
import { useHistory } from "react-router-dom";
export default  function HomePage(){

    const history = useHistory();
    const routeToOrdering = ()=>{
        history.push('/pizza/')
    }
    return(
        <div className='homePage'>
            <h1>Home Page</h1>
        <button id='order-pizza' onClick={routeToOrdering}>Order Pizza</button>
        </div>
    );
}