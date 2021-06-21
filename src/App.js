
import './App.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Poke from './components/pokedex'
import Regiones from './components/regiones'
import inicio from './components/inicio'
import busqueda from './components/busqueda'
import busquedaRegion from './components/buscadorRegion'
import items from './components/items'


function App() {
  return (
    <div>
      <header>
      <Router>
        <Navbar />
        <Route path="/pokedex" component={Poke}></Route>
        <Route path="/inicio" component={inicio}></Route>
        <Route path="/busqueda/:url" component={busqueda}/>
        <Route path="/regiones" component={Regiones}/>
        <Route path="/buscadorRegion/:url" component={busquedaRegion}/>
        <Route path="/items" component={items}></Route>
      </Router>
      </header>
      </div>
  );
}

export default App;



