import { useState } from 'react'
import React from 'react'
import Footer from './footer'
import Header from './header'
import Items from './items'
import Item from './item'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Кровать',
          img: 'bed.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis quaerat architecto pariatur.',
          category: 'bed', 
          price: '149.99'
        },
        {
          id: 2,
          title: 'Стул',
          img: 'chair.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis quaerat architecto pariatur.',
          category: 'chair', 
          price: '49.99'
        },
        {
          id: 3,
          title: 'Прикроватная тумба',
          img: 'bed_table.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis quaerat architecto pariatur.',
          category: 'bed_table', 
          price: '84.99'
        },
        {
          id: 4,
          title: 'Шкаф',
          img: 'cupboard.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis quaerat architecto pariatur.',
          category: 'cupboard', 
          price: '199.99'
        },
        {
          id: 5,
          title: 'Зеркало',
          img: 'mirror.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis quaerat architecto pariatur.',
          category: 'mirror', 
          price: '134.99'
        },
        {
          id: 6,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis quaerat architecto pariatur.',
          category: 'table', 
          price: '399.99'
        },
        
      ]
    }

    this.addToOrder = this.addToOrder.bind(this)
  }
  render () {
    return (
      <div className='wrapper'>
      <Header />
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
      </div>
    )
  }


  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] }, () => {
      console.log(this.state.orders)
    })
  }
}  
export default App
