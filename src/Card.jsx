import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Card.css'

function Card(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="card" >
      <img src={props.img} alt="movie actor image" />
      
    </div>
  )
}

export default Card