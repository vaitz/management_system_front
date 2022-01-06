

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './side_bar_data';
import './Navbar.css';
import { IconContext } from 'react-icons';

import styled from "styled-components";

const Div = styled.div`
    margin-right: 20px;
`

function SidePanel() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <Div/>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SidePanel;