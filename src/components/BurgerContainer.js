import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter burgers={this.props.filtered} filterBurgs={this.props.filterBurgs}/>
        <BurgerList burgers={this.props.burgers} showInfo={this.props.showInfo} filtered={this.props.filtered}/>
      </div>
    )
  }
}
