import React, { Component } from 'react';

const BurgerFilter = (props) => {
  return (
    <div className="BurgerFilter">
      <select onChange={(event) => props.filterBurgs(event)}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
