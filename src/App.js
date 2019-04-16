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
import pokeball from './img/pokeball.svg';
import './App.css';


const pokemons = [{'img':abra,'name':'Abra','price':'30','tags':'fight'}
                 ,{'img':bellsprout,'name':'Bellsprout','price':'60','tags':'plant'},
                 ,{'img':bullbasaur,'name':'Bullbasaur','price':'90','tags':'fight'},
                 {'img':caterpie,'name':'Caterpie','price':'70','tags':'plant'},
                {'img':charmander,'name':'Charmander','price':'40','tags':'fire'},
                {'img':pikachu,'name':'Pikachu','price':'150','tags':'electric'},
                {'img':meow,'name':'Meowth','price':'0','tags':'normal'},
                {'img':pidgey,'name':'Pidgey','price':'20','tags':'bug'},
                {'img':squirtle,'name':'Squirtle','price':'50','tags':'plant'}
                ]

const tags = ['normal','fight','plant','fire','water','electric','bug']

function Tags(props){
  const {tag,searchmethod} = props
  return (
    <button class="button is-rounded" style={{marginRight : '20px'}} onClick={() => searchmethod(tag)}>{tag}</button>
    )
}



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

function issearch(searchterm){
  return function(item){
    return item.name.toLowerCase().includes(searchterm.toLowerCase())
  }
}

function tagsearch(searchterm){
   return function(item){
    return item.tags.toLowerCase().includes(searchterm.toLowerCase())
  }
}


class PokeCard extends Component{
  constructor(props){
     super(props);
     this.state = {results:this.props.pokemons,search:''}
     this.searchchange = this.searchchange.bind(this);
     this.showtags = this.showtags.bind(this);
  }

  searchchange(event){
    var newresult = pokemons.filter(issearch(event.target.value))
    this.setState({
      results:newresult,
      search:event.target.value
    })
  }

  showtags(tag){
    var newresult = pokemons.filter(tagsearch(tag))
    this.setState({
      results:newresult
    })
  }

  render(){
    var results = this.state.results
    return(
      <div>
      <div class="container">
      <div class="has-text-centered" style={{marginBottom:'10px'}}>
      <img src={pokeball} style={{maxWidth:'70px'}}/>
      </div>

      <input class="input" type="text" value={this.state.search} placeholder="Gotta Catch'em all" style={{marginBottom : '10px'}} onChange={this.searchchange} />
      

      <div style={{marginBottom:'20px'}}>
      {tags.map((item) => <Tags tag={item} searchmethod={this.showtags}/> )}
      </div>

      <div class="columns is-multiline">
      {results.map((item) => <CardList img={item.img} name={item.name} price={item.price}/>)}
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
    <PokeCard pokemons={pokemons} />
    </div>
    );
  }
}

export default App;
