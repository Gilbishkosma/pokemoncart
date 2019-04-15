import React, { Component } from 'react';
import logo from './logo.svg';
import action from './img/action.svg'
import cart from './img/shopping-cart.svg'
import bullbasaur from './img/bullbasaur.svg'
import './App.css';


class MyCard extends Component{
    constructor(props){
      super(props)
    }
    render(){
      const {img,name,price} = this.props
      return(
        <div>
        <div class="card" style={{width:'220px'}}>
        <div class="card-image" style={{paddingTop:'10px',paddingLeft:'25px',paddingRight:'25px',paddingBottom:'20px'}}>
        <img src={img} />
        </div>
        <h1 class="title is-4 has-text-centered">{name}</h1>
        <h1 class="subtitle is-4 has-text-centered has-text-success">{price}</h1>
        <div class="has-text-centered" style={{ paddingBottom:'15px',paddingLeft:'10px',paddingRight:'10px',paddingTop:'0px'}}>
        <button class="button is-fullwidth"> Add to Cart</button>
        </div>
        </div>
        </div>
        )
    }
}


class PokeCard extends Component{
    constructor(props){
       super(props);
    }

    render(){
      return(
        <div>
        <MyCard img={bullbasaur}  name="Bullbasaur" price="$40"/>
        </div>
      )
    }
}



class App extends Component {
  render() {
    return (
    <div>
    <PokeCard />
    </div>
    );
  }
}

export default App;
