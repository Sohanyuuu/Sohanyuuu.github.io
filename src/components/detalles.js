import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Poke from './pokedex'

class Detalles extends React.Component {

    state = {
        pokemon: {},
        url: [],
        habilidades: [],
        tipo: [],
        moves: []
    }

    async componentDidMount() {
        try {
            const res = await axios.get(this.props.url)
            var lista = [res.data.sprites["front_default"], res.data.sprites["back_default"], res.data.sprites["back_shiny"], res.data.sprites["front_shiny"]]
            this.setState({
                pokemon: res.data,
                url: lista,
                habilidades: res.data.abilities,
                tipo: res.data.types,
                moves: res.data.moves
            });
            console.log(lista)
            console.log(this.state.pokemon)
        } catch (e) {

        }
    }

    imprimir = async (nom) => {
        window.location.href = "/busqueda/" + nom
    }


    render() {
        return (
            <div>
                <center>
                    
                    <div className="col-sm-8 card text-dark bg-warning border-dark mb-3">
                        <div className="card-body">
                            <h1 className="card-title"><kbd>{this.state.pokemon.name}</kbd></h1>
                        </div>
                        <div className="card-body">
                            <ul>
                                <center>
                                    {
                                        this.state.url.map(imagen => (
                                            <img src={imagen} width="150" height="150" className="rounded-circle img-thumbnail" />

                                        ))
                                    }
                                </center>
                            </ul>
                        </div>
                        <center>
                            <center>
                                <h1>Caracteristicas:</h1>
                                <div class="row row-cols-0 row-cols-md-2 g-1 col-sm-6 text-white">
                                    <div className="card col-sm-4 rounded-circle bg-dark">
                                        <br></br>
                                        <center>
                                        <div className="bg-danger col-sm-5">Peso</div>
                                        </center>
                                        <i class="fas fa-cloud"></i>
                                        <div className="card-body">
                                            <h1>{this.state.pokemon.weight} kg</h1></div>
                                    </div>
                                    <div className="card col-sm-4 rounded-circle bg-dark">
                                        <br></br>
                                        <center>
                                        <div className="bg-success col-sm-5">Altura</div>
                                        </center>
                                        <div className="card-body">
                                            <h1>{this.state.pokemon.height}  cm</h1></div>
                                    </div>
                                </div>
                            </center>
                            <h1>Habilidades:</h1>
                            <div className="row row-cols-0 row-cols-md-2 g-1 col-sm-6">
                                {
                                    this.state.habilidades.map(habilidad => (
                                        <div class="p-2 bg-dark text-white card ">
                                            <h5>{habilidad["ability"]["name"]}</h5>
                                        </div>
                                    ))
                                }
                            </div>

                            <h1>Tipos:</h1>
                            <div className="row row-cols-0 row-cols-md-2 g-1 col-sm-6">
                                {
                                    this.state.tipo.map(tipos => (
                                        <div class="p-2 bg-primary text-white card">
                                            <h5>{tipos["type"]["name"]}</h5>
                                        </div>
                                    ))
                                }
                            </div>

                            <h1>Movimientos:</h1>
                            <div className="row row-cols-0 row-cols-md-4 g-1">
                                {
                                    this.state.moves.map(move => (
                                        <div class="bg-warning text-white card">
                                            <div class="p-2 bg-success text-white rounded">{move["move"]["name"]}</div>
                                        </div>

                                    ))
                                }
                            </div>
                        </center>
                    </div>

                </center>
            </div>
        );
    }
}

export default Detalles;