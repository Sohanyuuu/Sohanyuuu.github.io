import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Informacion extends React.Component {

    state = {
        pokemon: {},
        url: "",
        habilidades: []
    }

    async componentDidMount() {
        try {
            const res = await axios.get(this.props.url)
            this.setState({
                pokemon: res.data,
                url: res.data.sprites["front_default"],
                habilidades: res.data.abilities
            });
            console.log(this.state.pokemon)
        } catch (e) {

        }
    }

    imprimir = async (nom) => {
        window.location.href = "/busqueda/" + nom
    }


    render() {
        return (
            <div className="card text-dark bg-warning border-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <br></br>
                        <br></br>
                        <center>
                            <img src={this.state.url} className="rounded-circle img-thumbnail" />
                        </center>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title"><kbd>{this.state.pokemon.name}</kbd></h1>
                            <div class="p-2 bg-success text-white">Habilidades:</div>
                            <ul className="list-group">
                                {
                                    this.state.habilidades.map(habilidad => (
                                        <li>
                                            <h5>{habilidad["ability"]["name"]}</h5>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="bg-dark text-white" onClick={() => this.imprimir(this.state.pokemon.name)}>Ver Pokemon</button>
            </div>
        );
    }
}

export default Informacion;