
import logo from './Poke.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function inicio() {
  return (
    <div>
      <body className="App-header">
      <center>
      <img src={logo}/>
      </center>
      </body>
      </div>
  );
}

export default inicio;
