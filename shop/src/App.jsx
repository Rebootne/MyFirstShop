import { useState } from 'react'
import React from 'react'
import Footer from './footer'
import Header from './header'
import Items from './items'
import Categories from './Categories'
import ShowFullItem from './ShowFullItem'
import item from './item'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
        
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
    return (
      <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.showFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState( {showFullItem: !this.state.showFullItem} )
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category == category) 
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}  
export default App
