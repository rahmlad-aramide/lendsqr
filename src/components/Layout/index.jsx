import React from 'react';
import './index.scss'
import TopNav from '../../components/TopNav';
import SideNav from '../../components/SideNav';

const Layout = ({children}) => {

    return (
        <div className='layout h-screen'>
            <TopNav />
            <SideNav />
            <div className='layout-content'>
                {children}
            </div>
        </div>
    )
}
export default Layout;