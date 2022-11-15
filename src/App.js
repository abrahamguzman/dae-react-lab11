import './App.css';
import { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: true
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/producto/')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({ productos: prod })
      })    
  }

  mostrarTabla() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.productos.map(prod => {
            return (
              <tr key={ prod.codigo}>
                <td>{ prod.codigo}</td>
                <td>{ prod.descripcion}</td>
                <td>{ prod.precio}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
  render() {
    if (this.state.recuperado)
      return this.mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
    ;
  }
  
}

export default App;
