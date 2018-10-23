import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {


  constructor(){
    super()

    this.state = {
      burgers: [],
      filtered: [],
      burgerName: '',
      burgerCategory: '',
      burgerImg: ''
    }
  }

  componentDidMount(){
    this.fetchBurgers()
  }

  fetchBurgers = () => {
    const URL = 'http://localhost:3001/burgers'

    fetch(URL)
      .then(res => res.json())
      .then(burgers => this.getBurgers(burgers))
  }

  getBurgers = (burgers) => {
    const newArr = [...burgers]

    this.setState({
      burgers: newArr
    })
  }

  showInfo = (burger) => {
    this.setState({
      burgerName: burger.name,
      burgerCategory: burger.category,
      burgerImg: burger.imgURL
    })
  }

  filterBurgs = (event) => {
    const newAllBurgs = [...this.state.burgers]
    if (event.target.value === "All"){
      this.setState({
        filtered: newAllBurgs
      })
    } else {
      let newArr = this.state.burgers.filter(burger => burger.category === event.target.value)
      this.setState({
        filtered: newArr
      })
    }
  }

  chooseCollection = () => {
    if (this.state.filtered.length === 0){
      return this.state.burgers
    } else {
      return this.state.filtered
    }
  }


  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.chooseCollection()} showInfo={this.showInfo} filterBurgs={this.filterBurgs} />
        <BurgerDisplay name={this.state.burgerName} category={this.state.burgerCategory} img={this.state.burgerImg} />
      </div>
    );
  }
}

export default App;
