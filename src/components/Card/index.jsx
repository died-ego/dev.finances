//! Dependências
import React, { useState } from "react";

//! Imagens
import Remove from "../../assets/images/minus.svg";

//! Estilo local
import "./styles.css";

export default function Card(props) {
  if (props.amount > 0) {
    return (
      <tr className='table-row'>
        <td className='description'>{props.description}</td>
        <td className='income'>+ R${props.amount}</td>
        <td className='date'>{props.date}</td>
        <td>
          <img src={Remove} alt='Remover transação' />
        </td>
      </tr>
    );
  } else {
    return (
      <tr className='table-row'>
        <td className='description'>{props.description}</td>
        <td className='expense'>- R${props.amount * -1}</td>
        <td className='date'>{props.date}</td>
        <td>
          <img src={Remove} alt='Remover transação' />
        </td>
      </tr>
    );
  }
}
