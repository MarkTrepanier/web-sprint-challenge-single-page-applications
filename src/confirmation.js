import React from "react";

export default function Confirmation(props){
    const{sentOrder} = props;

    return(
        <div>
            {sentOrder <= 0 ? <></> :
                <div>
                    <h2>Thank you for your order!</h2>
                    <h3>{sentOrder.name}</h3>
                    {sentOrder.address === '' ? <></>:
                    <div>
                        <h4>delivering to {sentOrder.address}</h4>
                    </div>}
                    <h3>{sentOrder.adress}</h3>
                    <h4>one {sentOrder.size} pizza with {JSON.stringify(sentOrder.toppings)}</h4>
                    {sentOrder.specialInstructions === '' ? <></>:
                    <div>
                        <h5>{sentOrder.specialInstructions}</h5>
                    </div>}
                </div>
            }
            
        </div>
    )
}