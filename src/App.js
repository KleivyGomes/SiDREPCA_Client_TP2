import './App.css';
import Navbar from './components/Navbar';
import ListaUser from './components/Viagem/ListaViagens'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ListaUser />
      </header>
    </div>
  );
}

export default App;
