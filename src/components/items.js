import React, { useEffect, useState } from 'react';
import {ReactDOM} from 'react-dom'
import axios from 'axios'
import Informacion from './informacion'
import Busqueda from './busqueda'
import Item from './item'
import { Link,withRouter } from 'react-router-dom';

function Poke() {
    const [listaitems, setlistaitems] = useState([]);

    const imprimir = async (nom) => {
        window.location.href = "/busqueda/"+nom
    }

    const busqueda = async () => {
        var id = document.getElementById('busqueda').value;
        
        window.location.href = "/busqueda/"+id
    }

    const getLista = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/item?limit=20")
            console.log(res.data.results)
            setlistaitems(res.data.results)
        } catch (e) {

        }
    }

    React.useEffect(() => {
        getLista()
    }, []);

    return (
        <div>
            <div className="bg-dark text-white">
                <center>
                    <h5>Busqueda por Nombre o ID pokemon</h5>
                    <div className="form-group">

                        <input
                            id="busqueda"
                            type="text"
                        />
                    </div>
                    <br></br>
                    <button type="button" className="btn btn-warning" onClick={() => busqueda()}>
                    Buscar
                    </button>
                    <br></br>
                    <br></br>
                </center>
            </div>

            <div class="row row-cols-0 row-cols-md-3 g-1">
                    {
                        listaitems.map(item => (
                            <div class="col">
                                <li className="list-group-item list-group-item-success">
                                    <Item url={item.url} />
                                </li>
                            </div>
                        ))
                    }
            </div>
        </div>
    );
}

export default Poke;