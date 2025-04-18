import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";


export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={'./public/img/' + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <FaTrash className='delite-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        )
    }
}

export default Order