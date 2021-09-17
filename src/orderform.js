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
        cheese:true,
        pepperoni:false,
        anchovie:false,
        onion:false,
        mushroom:false,
        specialInstructions:'',
    }
    const [order, setOrder]= useState(initialOrder);

    const inputOrder = (name, value) => {
        setOrder({
            ...order, [name]:value
        })
    }
    const orderChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        inputOrder(name, valueToUse);
    }
    return(
        <FormStyle id='pizza-form'>
            <h1>Make Your Pizza!</h1>
            <div className='personalInfo'>
                <label>{'Your Name '}
                    <input name='name' value={order.name} type='text' id='name-input' key='name' />{/*todo: validation*/}
                </label>
                <label>{'Your Address '}
                    <input name='address' value={order.address} type='text' id='address-input'/>{/*todo: validation*/}
                </label>
            </div>
            
            <div className='pizzaOptions'>
                <label>{'Pizza Size '}
                    <select name = 'size' value ={order.size} key='size' id='size-dropdown'>
                        <option value=''>-choose size-</option>
                        <option value='6"'>personal, 6"; +$2.99.</option>
                        <option value='10"'>small, 10"; +$4.99</option>
                        <option value='12"'>medium, 12"; +$9.99</option>
                        <option value='14"'>large, 14"; +$14.99</option>
                        <option value='16"'>XL, 16"; +$18.99</option>
                        <option value='18"'>XXL, 18"; +$21.99</option>
                    </select>
                </label>

                {/* //toppings */}
                <div className='toppings'>
                    <h2>Toppings</h2>
                    <h3>+ $0.75 each<span>(cheese and sauce $0.00)</span></h3>
                    <label>{'sauce '}
                        <input name='sauce' value={order.sauce} key ={'0'} type='checkbox'/>
                    </label>
                    <label>{'cheese '}
                        <input name='cheese' value={order.cheese} key ={'1'} type='checkbox'/>
                    </label>
                    <label>{'pepperoni '}
                        <input name='pepperoni' value={order.pepperoni} key ={'2'} type='checkbox'/>
                    </label>
                    <label>{'anchovie '}
                        <input name='anchovie' value={order.anchovie} key ={'3'} type='checkbox'/>
                    </label>
                    <label>{'onion '}
                        <input name='onion' value={order.onion} key ={'4'} type='checkbox'/>
                    </label>
                    <label>{'mushroom '}
                        <input name='mushroom' value={order.mushroom} key ={'5'} type='checkbox'/>
                    </label>
                    
                </div>

                <div>
                    <label>special instructions
                        <input name='specialInstructions' value={order.specialInstructions} type='text' id='special-text' key='ins'/>
                    </label>
                </div>

                <div>
                    <button id='order-button' type='submit'>Order!</button>
                </div>
            </div>
        </FormStyle>
    );
}