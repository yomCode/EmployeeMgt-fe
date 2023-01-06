import React from "react";
// import ButtonStyled from "./ButtonStyle";
// import styled from "styled-components";

function Button({title, classAttr, type, click}){

return(
    <button type={type} className={classAttr} onClick={click} >
        {title}
    </button>
);

}

export default Button;


// const ButtonStyle = styled.button`

//     background-color: red ;
//     border-radius: 10px;
//     width: 50px;
//     height: 20px;


// `;