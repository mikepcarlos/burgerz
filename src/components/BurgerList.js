import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {

  const burger = props.burgers.map(burger => <BurgerItem burger={burger} key={burger.id} showInfo={props.showInfo}/>)

  return (
    <div className="BurgerList">
      {burger}
    </div>
  )
}

export default BurgerList
