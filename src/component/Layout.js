import React from 'react'
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Auth from './Auth';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Account from '../pages/Account';

function Layout(props) {
    const isAuth = localStorage.getItem('isAuthenticated');
    const [isAuthenticated, updateAuthenticated] = useState(false);

    return (
      <Sidebar>
        {props.renderComponent}
      </Sidebar>
    )
}

export default Layout;
