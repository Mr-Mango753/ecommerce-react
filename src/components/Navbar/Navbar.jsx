import React, { useState, useEffect } from 'react'; 
import LOGO from '../../assets/shopppp_logo.png';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (listNum) => () => {
    setSelected(listNum)
  }

  const navigate = useNavigate()
  const navigateToHome = () => navigate('/')
  const navigateToCart = () => navigate('/cart')
  const navigateToAbout = () => navigate('/about')
  const navigateToContact = () => navigate('/contact')
  
  return (
    <>
     <aside class="sidebar">
      <div class="toggle">
        <a href="#" class="burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
      </div>
      <div class="side-inner">
        <div style={{paddingLeft: '20px', paddingBottom: '10px'}}>
          <img src={LOGO} width='120px' height="120px"/>
        </div>
        
        <div class="nav-menu">
          <ul>
            <li class={selected == 0 ? 'active' : 'inactive' } onClick={handleClick(0)}><a onClick={navigateToHome}>Home</a></li>
            <li class={selected == 1 ? 'active' : 'inactive'} onClick={handleClick(1)}><a onClick={navigateToCart}>Cart</a></li>
            <li class={selected == 2 ? 'active' : 'inactive'} onClick={handleClick(2)}><a onClick={navigateToContact}>Contact</a></li>
            <li class={selected == 3 ? 'active' : 'inactive'} onClick={handleClick(3)}><a onClick={navigateToAbout}>About</a></li>
          </ul>
        </div>
      </div>
      
    </aside>
    </>
  )
}

export default Navbar