import React from 'react'
import { CardComponent } from '../Card/CardComponent'
import './CardListStyles.css'
export const CardListComponent = (props) => {
  return (
    <div className='card-list'>
      {
        props.monsters.map(monster => <CardComponent key={monster.id} monster={monster} />)
      }
    </div>
  )
}
