
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
export default class Col extends Component{
    render(){
        return(
            <div>col<Outlet /></div>
            
        )
    }
}