import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Nav from './styled/Nav.styled'
import Icon from './styled/Icon.styled'



const Header = () => {
  return (
<Link to="/"  id="RouterNavLink">
    <Nav >
    <div className="container flex flex-wrap items-center justify-center mx-auto">
        <Icon >
        <FaCoins />
            <span >COINS  <span className='text-red-700'>CORNER</span> </span>
        </Icon>
    
    </div>
    </Nav>
</Link>
  )
}

export default Header
