import React from "react";

export default function Confirmation(props){
    const{sentOrder} = props;
    return(
        <div>
            {sentOrder.name}
        </div>
    )
}