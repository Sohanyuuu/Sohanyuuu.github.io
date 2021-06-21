import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './Pikachu.JPG';
import items from './items.JPG';
import regiones from './regiones.JPG';
import inicio from './inicio.JPG';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <Link className="navbar-brand" to="/inicio">
                <img src={inicio} width="170" height="70"/>
                </Link>   
                <Link className="navbar-brand" to="/regiones">
                <img src={regiones} width="170" height="70"/>
                </Link>
                <Link className="navbar-brand" to="/pokedex">
                <img src={logo}  width="170" height="70"/>
                </Link>
                <Link className="navbar-brand" to="/items">
                <img src={items}  width="145" height="45"/>
                </Link>
            </nav>
        )
    }
}