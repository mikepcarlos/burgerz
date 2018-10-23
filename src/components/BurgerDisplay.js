import React, { Component } from 'react';

const BurgerDisplay = (props) => {

  let opposite;

  if (props.category === "Relatable"){
    opposite = "Bougie"
  } else {
    opposite = "Relatable"
  }


  return (
    <div className="BurgerDisplay">
      <img src={props.img}/>
      <br/>
      <h1>{props.name}</h1>
      <br/>
      <select onChange={console.log}>
        <option value={props.category}>{props.category}</option>
        <option value={opposite}>{opposite}</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
