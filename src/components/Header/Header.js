import React from 'react';
import './Header.css';
import { FiHome } from "react-icons/fi";

export const Header = () => {

  return (
    <>
      <header>
        <div className='inner'>

          <a href='/' className='home'>
            <FiHome className='home-icon' size='30' color='royalblue' />
          </a>

          <div className='main-menu'>
            <ul className='menu'>
              <li>
                <a href='/signin'>Sign In</a>
              </li>
              <li>
              <a href='/review'>Review</a>
              </li>
            </ul>
          </div>

        </div>
      </header>

    </>
  )
}
