import React, { useEffect, useState, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactDOM } from 'react-dom'
import axios from 'axios'
import Informacion from './informacion'
import Detalles from './detalles';
import Inforegion from './inforegion';


export default class buscadorRegion extends Component {

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
                            <li className="list-group-item" key={this.state.pokemon} onDoubleClick={() => this.imprimir(this.state.pokemon)}>
                                <Inforegion url={`https://pokeapi.co/api/v2/region/${this.state.pokemon}`} />
                            </li>
                        </div>
                    </ul>
                </div>

            </div>
        )
    }
}