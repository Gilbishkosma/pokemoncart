import React, { Component } from 'react';
import logo from './logo.svg';
import cartlogo from './img/shopping-cart.svg';
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


const pokemons = [{id:1,'img':abra,'name':'Abra','price':'30','tags':'fight'}
                 ,{id:2,'img':bellsprout,'name':'Bellsprout','price':'60','tags':'plant'},
                 ,{id:3,'img':bullbasaur,'name':'Bullbasaur','price':'90','tags':'fight'},
                 {id:4,'img':caterpie,'name':'Caterpie','price':'70','tags':'plant'},
                {id:5,'img':charmander,'name':'Charmander','price':'40','tags':'fire'},
                {id:6,'img':pikachu,'name':'Pikachu','price':'150','tags':'electric'},
                {id:7,'img':meow,'name':'Meowth','price':'0','tags':'normal'},
                {id:8,'img':pidgey,'name':'Pidgey','price':'20','tags':'bug'},
                {id:9,'img':squirtle,'name':'Squirtle','price':'50','tags':'water'}
                ]
var copypoke = [...pokemons]
var cart = []
const tags = [{id:1,tag:'All'},{id:2,tag:'Normal'},{id:3,tag:'fight'},{id:4,tag:'plant'},{id:5,tag:'fire'},{id:6,tag:'water'},{id:7,tag:'electric'},{id:8,tag:'bug'}]



//COMPONENT
function Tags(props){
  const {tag,searchmethod} = props
  return (
    <button className="button is-rounded"  style={{marginRight : '20px'}} onClick={() => searchmethod(tag)}>{tag}</button>
    )
}


//CARD
class MyCard extends Component{
    constructor(props){
      super(props)
    }
    render(){
      const {img,name,price} = this.props
      return(
        <div>
        <div className="card" style={{width:'220px'}}>
        <div className="card-image" style={{paddingTop:'10px',paddingLeft:'25px',paddingRight:'25px',paddingBottom:'20px'}}>
        <img src={img} />
        </div>
        <h1 className="title is-4 has-text-centered">{name}</h1>
        <h1 className="subtitle is-4 has-text-centered has-text-success">${price}</h1>
        <div className="has-text-centered" style={{ paddingBottom:'15px',paddingLeft:'10px',paddingRight:'10px',paddingTop:'0px'}}>
        <button className="button is-fullwidth"> Add to Cart</button>
        </div>
        </div>
        </div>
        )
    }
}


//List of card
class CardList extends Component{
  constructor(props){
    super(props);
 }
 render(){
   const {img,name,price} = this.props
   return(
    <div className="column is-3" >
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

//
function tagsearch(searchterm){
   return function(item){
    return item.tags.toLowerCase().includes(searchterm.toLowerCase())
  }
}


class PokeCard extends Component{
  constructor(props){
     super(props);
     this.state = {results:this.props.pokemons,search:'',result_tags:this.props.tags}
     this.searchchange = this.searchchange.bind(this);
     this.showtags = this.showtags.bind(this);
  }

  searchchange(event){
    var newresult = copypoke.filter(issearch(event.target.value))
    this.setState({
      results:newresult,
      search:event.target.value
    })
  }

  showtags(tag){
    if(tag === 'All'){
      copypoke = pokemons
      var newresult = pokemons
      this.setState({
        results:newresult
         })
    }
    else{
       var newresult = pokemons.filter(tagsearch(tag))
       copypoke = newresult
       this.setState({
          results:newresult
       })
    }
  }

  render(){
    var results = this.state.results
    return(
      <div>
      <div className="container">
      <div className="has-text-centered" style={{marginBottom:'10px'}}>
      <img src={pokeball} style={{maxWidth:'70px'}}/>
      </div>
      <div className="has-text-right">
      <img src={cartlogo} style={{maxWidth:'30px'}} />
      </div>
      <input className="input" type="text" value={this.state.search} placeholder="Gotta Catch'em all" style={{marginBottom : '10px'}} onChange={this.searchchange} />
      

      <div style={{marginBottom:'20px'}}>
      {tags.map((item) => <Tags tag={item.tag} key={item.id.toString()} searchmethod={this.showtags}/> )}
      </div>

      <div className="columns is-multiline">
      {results.map((item) => <CardList img={item.img} name={item.name} price={item.price} key={item.id.toString()}/>)}
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
    <PokeCard pokemons={pokemons} tags={tags} />
    </div>
    );
  }
}

export default App;
