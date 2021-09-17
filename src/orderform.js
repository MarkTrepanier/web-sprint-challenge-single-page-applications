import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Axios from "axios";
import { useHistory } from "react-router";

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
export default function OrderForm(props){
    const {errors, validate, setSentOrder}=props;
    
const [order, setOrder]= useState(initialOrder);


    const inputOrder = (name, value) => {
        validate(name,value);
        setOrder({
            ...order, [name]:value
        })
    }
    const orderChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        inputOrder(name, valueToUse);
    }
    const history = useHistory();
    const postNewOrder= newOrder =>{
        console.log('posting order')
        Axios.post('https://reqres.in/api/orders',newOrder)
        .then(res=>{
            console.log(res.data);
            setSentOrder(res.data);
            setOrder(initialOrder);
            history.push('/confirmation/');
        })
        .catch(er=>console.log(er));
    }

    const onSubmit = evt =>{
        evt.preventDefault();
        
        submit();
    }

    const submit =()=>{
        const newOrder = {
            name:order.name.trim(),
            address:order.address.trim(),
            size:order.size,
            toppings: ['sauce','cheese','pepperoni','anchovie','onion','mushroom'].filter(topping=> !!order[topping]),
            specialInstructions:order.specialInstructions.trim(),
        }
        postNewOrder(newOrder);
    }

    return(
        <FormStyle id='pizza-form' onSubmit={onSubmit}>
            <h1>Make Your Pizza!</h1>
            <div className='personalInfo'>
                <label>{'Your Name '}
                    <input name='name' value={order.name} type='text' id='name-input' key='name' onChange={orderChange} />{/*todo: validation*/}
                </label>
                <label>{'Your Address '}
                    <input name='address' value={order.address} type='text' id='address-input' onChange={orderChange}/>{/*todo: validation*/}
                </label>
            </div>
            
            <div className='pizzaOptions'>
                <label>{'Pizza Size '}
                    <select name = 'size' value ={order.size} key='size' id='size-dropdown' onChange={orderChange}>
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
                        <input name='sauce' checked={order.sauce} key ={'0'} type='checkbox' onChange={orderChange}/>
                    </label>
                    <label>{'cheese '}
                        <input name='cheese' checked={order.cheese} key ={'1'} type='checkbox' onChange={orderChange}/>
                    </label>
                    <label>{'pepperoni '}
                        <input name='pepperoni' checked={order.pepperoni} key ={'2'} type='checkbox' onChange={orderChange}/>
                    </label>
                    <label>{'anchovie '}
                        <input name='anchovie' checked={order.anchovie} key ={'3'} type='checkbox' onChange={orderChange}/>
                    </label>
                    <label>{'onion '}
                        <input name='onion' checked={order.onion} key ={'4'} type='checkbox' onChange={orderChange}/>
                    </label>
                    <label>{'mushroom '}
                        <input name='mushroom' checked={order.mushroom} key ={'5'} type='checkbox' onChange={orderChange}/>
                    </label>
                </div>

                <div>
                    <label>special instructions
                        <input name='specialInstructions' value={order.specialInstructions} type='text' id='special-text' key='ins' onChange={orderChange}/>
                    </label>
                </div>
                {errors.length <= 0 ? <></>:<div>{errors.name}</div>}
                
                <div className='submitButton'>
                    <button type='submit' onClick={submit}>submit</button>
                </div>
            </div>
        </FormStyle>
    );
}