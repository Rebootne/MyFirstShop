import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'bed',
                    name: 'Кровати'
                },
                {
                    key: 'chair',
                    name: 'Стулья'
                },
                {
                    key: 'bed_table',
                    name: 'Тумбы'
                },
                {
                    key: 'cupboard',
                    name: 'Шкафы'
                },
                {
                    key: 'mirror',
                    name: 'Зеркала'
                },
                {
                    key: 'table',
                    name: 'Столы'
                }
            ]
        }
    }
  render() {
    return (
      <div className='catrgoris'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories