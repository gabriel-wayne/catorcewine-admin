import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clientes from './components/Clientes';
import Productos from './components/Productos';
import Categorias from './components/Categorias';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/clientes" component={Clientes} />
          <Route path="/productos" component={Productos} />
          <Route path="/categorias" component={Categorias} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
