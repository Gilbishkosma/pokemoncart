import React, { Component } from 'react';
import logo from './logo.svg';
import cart from './img/shopping-cart.svg';
import action from './img/action.svg';
import abra from './img/abra.svg';
import bellsprout from './img/bellsprout.svg';
import bullbasaur from './img/bullbasaur.svg';
import caterpie from './img/caterpie.svg';
import charmander from './img/charmander.svg';
import pikachu from './img/pikachu-2.svg';
import meow from './img/meowth.svg';
import pidgey from './img/pidgey.svg';
import squirtle from './img/squirtle.svg';
import './App.css';


const pokemons = [{'img':abra,'name':'Abra','price':'30'}
                 ,{'img':bellsprout,'name':'Bellsprout','price':'60'}
                 ,{'img':bullbasaur,'name':'Bullbasaur','price':'90'},
                 {'img':caterpie,'name':'Caterpie','price':'70'},
                {'img':charmander,'name':'Charmander','price':'40'},
                {'img':pikachu,'name':'Pikachu','price':'150'},
                {'img':meow,'name':'Meowth','price':'0'},
                {'img':pidgey,'name':'Pidgey','price':'20'},
                {'img':squirtle,'name':'Squirtle','price':'50'}
                ]

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
        <h1 class="subtitle is-4 has-text-centered has-text-success">${price}</h1>
        <div class="has-text-centered" style={{ paddingBottom:'15px',paddingLeft:'10px',paddingRight:'10px',paddingTop:'0px'}}>
        <button class="button is-fullwidth"> Add to Cart</button>
        </div>
        </div>
        </div>
        )
    }
}



class CardList extends Component{
  constructor(props){
    super(props);
 }
 render(){
   const {img,name,price} = this.props
   return(
    <div class="column is-3">
      <MyCard img={img}  name={name} price={price} />
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
      <div class="container">
      <div class="columns is-multiline">
      {pokemons.map((item) => <CardList img={item.img} name={item.name} price={item.price}/>)}
      </div> 
      </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
    <div style={{marginTop:'20px'}}>
    <PokeCard />
    </div>
    );
  }
}

export default App;
