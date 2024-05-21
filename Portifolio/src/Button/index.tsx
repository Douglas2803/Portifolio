import React from 'react'

import './style.scss'

interface IButtonProps {
    text: string ;
    className?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button className={`button ${props.className}`}>{props.text}</button>
  )
}

export default Button