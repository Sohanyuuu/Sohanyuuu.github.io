import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Region extends React.Component {

    state = {
        pokemon: {},
        url: "",
        habilidades: []
    }

    async componentDidMount() {
        try {
            console.log(this.props.url)
            const res = await axios.get(this.props.url)
            this.setState({
                pokemon: res.data,
                url: res.data.main_generation["name"]
            });
            console.log(res.data.main_generation["name"])
        } catch (e) {

        }
    }

    imprimir = async (nom) => {
        window.location.href = "/buscadorRegion/" + nom
    }


    render() {
        return (
            <div className="card text-dark bg-info border-dark mb-3">
                <center>
                <kbd>
                            id# {this.state.pokemon.id}
                            </kbd>
                            </center>
                <div class="row">
                    <div class="col-sm-6">
                        <center>
                            <div class="card-body">
                            
                                <h1 className="card-title"><kbd className="bg-warning">{this.state.pokemon.name}</kbd></h1>
                                <div className="card border-dark mb-3">
                                    <div className="card-header bg-primary">Generacion</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{this.state.url}</h5>
                                    </div>
                                </div>

                            </div>
                        </center>
                    </div>
                    <div class="col-sm-6">
                        <br></br>
                        <br></br>
                        <br></br>
                        <center>
                        <button className="btn btn-outline-secondary bg-dark text-white" onClick={() => this.imprimir(this.state.pokemon.id)}>Ver Ciudades</button>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Region;