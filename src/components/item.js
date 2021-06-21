import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Item extends React.Component {

    state = {
        item: {},
        url: ""
    }

    async componentDidMount() {
        try {
            const res = await axios.get(this.props.url)
            this.setState({
                item: res.data,
                url: ""
            });
            console.log(this.state.item)
        } catch (e) {

        }
    }

    imprimir = async (nom) => {
        window.location.href = "/busqueda/" + nom
    }


    render() {
        return (
            <div className="card text-dark bg-success border-dark mb-3">
                <kbd>
                    id# {this.state.item.id}
                </kbd>
                <kbd className="text-dark bg-success text-white"><h3><i>Item: </i>{this.state.item.name}</h3></kbd>
                <center>
                    <button type="button" className="btn btn-light border-dark col-sm-6" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver informacion</button>
                </center>
                <div className="modal fade" id="exampleModal">
                    <div className="modal-dialog">
                    <h1>Hola</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;