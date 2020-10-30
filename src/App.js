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
import snorlax from './img/snorlax.svg';
import jigglypuff from './img/jigglypuff.svg';
import mankey from './img/mankey.svg';
import duck from './img/psyduck.svg';
import eevee from './img/eevee.svg';
import tornado from './img/tornado.svg';
import weedle from './img/weedle.svg';
import zubat from './img/zubat.svg';
import venonat from './img/venonat.svg';
import gastly from './img/gastly.svg';
import gengar from './img/gengar.svg';


// Import components
import Tags from './components/Tags'

import './App.css';


const pokemons = [{ id: 1, 'img': abra, 'name': 'Abra', 'price': '30', 'tags': 'fight' }
  , { id: 2, 'img': bellsprout, 'name': 'Bellsprout', 'price': '60', 'tags': 'plant' },
  , { id: 3, 'img': bullbasaur, 'name': 'Bullbasaur', 'price': '90', 'tags': 'plant' },
{ id: 4, 'img': caterpie, 'name': 'Caterpie', 'price': '70', 'tags': 'plant' },
{ id: 5, 'img': charmander, 'name': 'Charmander', 'price': '40', 'tags': 'fire' },
{ id: 6, 'img': pikachu, 'name': 'Pikachu', 'price': '150', 'tags': 'electric' },
{ id: 7, 'img': meow, 'name': 'Meowth', 'price': '0', 'tags': 'normal' },
{ id: 8, 'img': pidgey, 'name': 'Pidgey', 'price': '20', 'tags': 'bug' },
{ id: 9, 'img': squirtle, 'name': 'Squirtle', 'price': '50', 'tags': 'water' },
{ id: 10, 'img': snorlax, name: 'Snorlax', price: '60', tags: 'water' },
{ id: 11, img: jigglypuff, name: 'Jigglypuff', price: '10', tags: 'normal' },
{ id: 12, img: mankey, name: 'Mankey', price: '30', tags: 'fight' },
{ id: 13, img: duck, name: 'Psyduck', price: '20', tags: 'normal' },
{ id: 14, img: tornado, name: 'Tornado', price: '50', tags: 'fight' },
{ id: 15, img: weedle, name: 'Weedle', price: '80', tags: 'bug' },
{ id: 16, img: zubat, name: 'Zubat', price: '30', tags: 'fight' },
{ id: 17, img: eevee, name: 'eevee', price: '50', tags: 'normal' },
{ id: 18, img: venonat, name: 'Venonat', price: '20', tags: 'bug' },
{ id: 19, img: gastly, name: 'Gastly', price: '20', tags: 'ghost' },
{ id: 19, img: gengar, name: 'Gengar', price: '7.5', tags: 'electric' }
]
var copypoke = [...pokemons]
var cart = []
const tags = [{ id: 1, tag: 'All' }, { id: 2, tag: 'Normal' }, { id: 3, tag: 'fight' }, { id: 4, tag: 'plant' }, { id: 5, tag: 'fire' }, { id: 6, tag: 'water' }, { id: 7, tag: 'electric' }, { id: 8, tag: 'bug' }, {id: 9, tag: 'ghost'} ]




function Cartimages(props) {
  const { item, removepoke } = props
  return (
    <div className="column is-gapless">
      <button id={item.img} className="delete is-small" onClick={() => removepoke(item)} />
      <img src={item.img} style={{ maxWidth: '70px' }} />
    </div>
  )
}


function Cartshow(props) {
  const { cartvisible, hidecart, removepoke } = props
  return (
    <div className={`${cartvisible === true ? '' : 'is-invisible'}`}>
      <section className="hero is-primary fix-footer">
        <div className="tags has-addons is-right" style={{ padding: '2px' }}>
          <span className="tag is-danger">Close</span>
          <a className="tag is-delete" onClick={hidecart}></a>
        </div>
        <div className="hero-body">
          <div className="columns is-multiline is-mobile">
            {cart.map((item) => <Cartimages item={item} key={item.id} removepoke={removepoke} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

class MyCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { img, name, price, addcart, id, cart } = this.props
    const cardExist = cart.filter((item) => item.id === id).length > 0;
    return (
      <div>
        <div className="card" style={{ width: '220px', marginLeft: '10px' }}>
          <div className="card-image" style={{ paddingTop: '10px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '20px' }}>
            <img src={img} />
          </div>
          <h1 className="title is-4 has-text-centered">{name}</h1>
          <h1 className="subtitle is-4 has-text-centered has-text-success">${price}</h1>
          <div className="has-text-centered" style={{ paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '0px' }}>
            <button className={`${cardExist === true ? 'button is-fullwidth is-info' : 'button is-fullwidth'}`} onClick={() => addcart(id)} disabled={cardExist}>{cardExist ? 'Added' : 'Add to cart'}</button>
          </div>
        </div>
      </div>
    )
  }
}



class CardList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { img, name, price, addcart, id, cart } = this.props
    return (
      <div className="column">
        <MyCard img={img} name={name} price={price} addcart={addcart} cart={cart} id={id} />
      </div>
    )
  }
}


function issearch(searchterm) {
  return function (item) {
    return item.name.toLowerCase().includes(searchterm.toLowerCase())
  }
}



function idsearch(id) {
  return pokemons.filter((item) => item.id == id)[0]
}

function tagsearch(searchterm) {
  return function (item) {
    return item.tags.toLowerCase().includes(searchterm.toLowerCase())
  }
}


class PokeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { results: this.props.pokemons, search: '', result_tags: this.props.tags, selected_tag: tags[0], pokecart: this.props.cart, cartvisible: false }
    this.searchchange = this.searchchange.bind(this);
    this.showtags = this.showtags.bind(this);
    this.addcart = this.addcart.bind(this);
    this.showcart = this.showcart.bind(this);
    this.hidecart = this.hidecart.bind(this);
    this.removepoke = this.removepoke.bind(this);
  }


  searchchange(event) {
    var newresult = copypoke.filter(issearch(event.target.value))
    this.setState({
      results: newresult,
      search: event.target.value
    })
  }

  addcart(item) {
    item = idsearch(item)
    var itemadd = [...this.state.pokecart, item]
    cart = itemadd
    this.setState({
      pokecart: itemadd
    })
  }

  removepoke(item) {
    var index = this.state.pokecart.indexOf(item)
    if (index > -1) {
      this.state.pokecart.splice(index, 1)
    }
    var itemadd = this.state.pokecart
    cart = itemadd
    this.setState({
      pokecart: itemadd
    })
  }

  showcart(item) {
    this.setState({
      cartvisible: true
    })
  }

  hidecart(item) {
    this.setState({
      cartvisible: false
    })
  }

  showtags(tag) {
    if (tag === 'All') {
      copypoke = pokemons
      var newresult = pokemons
      this.setState({
        results: newresult,
        selected_tag: tags[0]
      })
    }
    else {
      var newresult = pokemons.filter(tagsearch(tag))
      var selected = tags.filter(item => item.tag == tag)[0]
      copypoke = newresult
      this.setState({
        results: newresult,
        selected_tag: selected
      })
    }
  }

  render() {
    var results = this.state.results
    return (
      <div style={{ marginBottom: '300px' }}>
        <section className="section">
          <div className="container">
            <div className="has-text-centered" style={{ marginBottom: '10px' }}>
              <img src={pokeball} style={{ maxWidth: '70px' }} />
            </div>
            <div className="has-text-right">
              <img src={cartlogo} style={{ maxWidth: '30px' }} onClick={this.showcart} />
              {cart.length}
            </div>
            <br />
            <div className="control">
              <input className="input" type="text" value={this.state.search} placeholder="Gotta Catch'em all" style={{ marginBottom: '10px' }} onChange={this.searchchange} />
            </div>
            <div className="columns is-multiline is-mobile" style={{ marginBottom: '20px' }}>
              {tags.map((item) => <Tags tag={item.tag} tags={tags} key={item.id.toString()} selected_tag={this.state.selected_tag} searchmethod={this.showtags} />)}
            </div>
            <div className="columns is-multiline is-mobile">
              {results.map((item) => <CardList img={item.img} cart={this.state.pokecart} name={item.name} price={item.price} addcart={this.addcart} id={item.id} key={item.id.toString()} />)}
            </div>
          </div>
        </section>
        <Cartshow cartvisible={this.state.cartvisible} hidecart={this.hidecart} removepoke={this.removepoke} />
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <PokeCard pokemons={pokemons} tags={tags} cart={cart} />
        <footer className="footer">
          <div className="has-text-right" style={{ marginRight: "40px" }}>
            <p>Made by <a href="https://github.com/Gilbishkosma/">Gilbish kosma</a>.
    An assignment of <a href="https://reactjs.org">React</a> from <a href="https://hackr.io/hack-n-learn/">hackr.io</a>.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
