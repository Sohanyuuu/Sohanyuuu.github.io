import React, { useEffect, useState, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactDOM } from 'react-dom'
import axios from 'axios'
import Informacion from './informacion'
import Detalles from './detalles';


export default class busqueda extends Component {

    state = {
        pokemon: this.props.match.params.url
    }

    imprimir = async (nom) => {
        window.location.href = "/busqueda/"+nom
    }

    render() {
        return (
            <div>
                
                <div class="row row-cols-2 row-cols-md-1 g-20">
                    <ul className="list-group">

                        <div class="col">
                            <li className="list-group-item list-group-item-action list-group-item-success" key={this.state.pokemon} onDoubleClick={() => this.imprimir(this.state.pokemon)}>
                                <Detalles url={`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`} />
                            </li>
                        </div>
                    </ul>
                </div>

            </div>
        )
    }
}