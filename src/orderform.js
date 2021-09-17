import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Axios from "axios";

export default function OrderForm(){
    const FormStyle = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .toppings, .personalInfo{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `
    const initialOrder ={
        name:'',
        address:'',
        size:'',
        sauce:true,
        xtraSauce:false,
        cheese:true,
        xtraCheese:false,
        pepperoni:false,
        anchovie:false,
        onion:false,
        mushroom:false,
        jalapeno:false

    }
    const [pizza, setPizza]= useState(initialOrder);

    const toppings=['sauce','xtra sauce', 'cheese', 'xtra cheese', 'pepperoni', 'anchovie','onion', 'mushroom', 'jalape\xF1o' ]


    return(
        <FormStyle id='pizza-form'>
            <h1>Make Your Pizza!</h1>
            <div className='personalInfo'>
                <label>{'Your Name '}
                    <input type='text' id='name-input'/>{/*todo: validation*/}
                </label>
                <label>{'Your Address '}
                    <input type='text' id='address-input'/>{/*todo: validation*/}
                </label>
            </div>
            
            <div className='pizzaOptions'>
                <label>{'Pizza Size '}
                    <select id='size-dropdown'>
                        <option value=''>-choose size-</option>
                        <option value='6"'>personal, 6"; +$2.99.</option>
                        <option value='10"'>small, 10"; +$4.99</option>
                        <option value='12"'>medium, 12"; +$9.99</option>
                        <option value='14"'>large, 14"; +$14.99</option>
                        <option value='16"'>XL, 16"; +$18.99</option>
                        <option value='18"'>XXL, 18"; +$21.99</option>
                    </select>
                </label>

                <div className='toppings'>
                    <h2>Toppings</h2>
                    <h3>+ $0.75 each<span>(cheese and sauce $0.00)</span></h3>
                    {/*toppings listed above, line 33*/}
                    {toppings.map(topping=>{
                        return(
                            <label>{topping}
                        <input type='checkbox'/>
                    </label>
                        )
                    })}
                </div>

                <div>
                    <label>special instruction
                        <input type='text' id='special-text'/>
                    </label>
                </div>

                <div>
                    <button id='order-button'>Order!</button>
                </div>
            </div>
        </FormStyle>
    );
}