import React, { useRef } from 'react';
import './index.scss'
import logo from '../../assets/lendsqr.svg';
import bell from '../../assets/icons/bell.svg';
import avatar from '../../assets/icons/avatar.svg';
import dropdown from '../../assets/icons/dropdown.svg';
import docs from '../../assets/icons/settings/audit-log.svg';
import Search from '../Search';
import { FaTimes, FaBars } from 'react-icons/fa';


const TopNav = () => {
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle('active');
  }
  return (
    <div className='top-nav'>
      <div className='flex-between desktop'>
        <div className='top-nav-logo flex align-center'>
          <img src={logo} alt='Lendsqr' />
        </div>
        <div className='top-nav-search flex align-center'>
          <Search />
        </div>
        <div className='top-nav-links flex-between align-center'>
            <p className='pointer docs'>Docs</p>
            <img className='bell pointer' src={bell} alt="Notification bell" /> 
          <div className='flex align-center'>
            <img className='avatar pointer rounded-full' src={avatar} alt="User avatar" />
            <div className='username pointer'>Adedeji</div> 
            <img src={dropdown} alt="dropdown" className='dropdown' />
          </div>
        </div>
      </div>
      <div className='top-nav flex-between mobile'>
        <div className='top-nav-logo flex align-center'>
          <img src={logo} alt='Lendsqr' />
        </div>
        <div className='open-nav flex-end align-center'>
          <button onClick={showMenu}><FaBars size={30} /></button>
        </div>
        <div className='mobile-nav' ref={navRef}>
          <div className='close-nav flex-end'>
            <button onClick={showMenu}><FaTimes size={30} /></button>
          </div>
          <div className='mobile-nav-links flex-col flex-between align-center'>
            <div className='flex align-center'>
              <img className='avatar pointer rounded-full' src={avatar} alt="User avatar" />
              <div className='username pointer'>Adedeji</div> 
              <img src={dropdown} alt="dropdown" className='dropdown' />
            </div>
            <div className='mobile-nav-search flex align-center'>
              <Search />
            </div>
            <ul className='mobile-nav-lists'>
              <li className='pointer docs'>
                <img className='docs pointer' src={docs} alt="Documents" /> 
                Docs
              </li>
              <li className='bell pointer'>
                <img src={bell} alt="Notification bell" /> 
                Notifications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav