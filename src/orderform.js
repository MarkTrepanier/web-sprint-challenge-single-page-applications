import React from "react";

export default function OrderForm(){
    return(
        <div id='pizza-form'>
            <h1>Make Your Pizza!</h1>
            <div className='personalInfo'>
                <label>{'Your Name '}
                    <input type='text' id='name-input'></input>{/*todo: validation*/}
                </label>
                <label>{'Your Address '}
                    <input type='text' id='address-input'></input>{/*todo: validation*/}
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

                <div className='Toppings'>
                    <h2>Toppings</h2>
                    <h3>+ $0.75 each<span>(cheese and sauce $0.00)</span></h3>
                    <label>{'sauce '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{'xtra sauce '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{'cheese '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{'xtra cheese '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{'pepperoni '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{'anchovi '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{'onion '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{'mushroom '}
                        <input type='checkbox'></input>
                    </label>
                    <label>{`jalape\xF1o`}
                        <input type='checkbox'></input>
                    </label>
                    
                </div>
            </div>
        </div>
    );
}