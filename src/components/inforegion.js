import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Poke from './pokedex'

class Inforegion extends React.Component {

    state = {
        info: {},
        ciudades: [],
        nombre: "",
        generacion: []
    }

    async componentDidMount() {
        try {
            const res = await axios.get(this.props.url)
            this.setState({
                info: res.data,
                ciudades: res.data.locations,
                nombre: res.data.name,
                generacion: res.data.main_generations
            });
            console.log(this.state.nombre)
        } catch (e) {

        }
    }

    imprimir = async (nom) => {
        window.location.href = "/busqueda/" + nom
    }


    render() {
        return (
            <div>
                <div className="bg-info border-dark rounded">
                    <center>
                        <kbd>
                            Region # {this.state.info.id}
                        </kbd>
                        <h1>{this.state.nombre}</h1>
                        <div class="row row-cols-1 row-cols-md-5 g-4">
                            {
                                this.state.ciudades.map(ciudad => (
                                    <div class="card border-dark rounded-circle">
                                        <br></br>
                                        <div class="card-body">
                                            <h5><kbd className="bg-primary">{ciudad["name"]}</kbd></h5>
                                        </div>
                                        <br></br>
                                    </div>
                                ))
                            }
                        </div>
                    </center>

                </div>
            </div>
        );
    }
}

export default Inforegion;