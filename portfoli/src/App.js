import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import NavBar from "./components/NavBar";


import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar/>
        <Home/>
        <Sobre/>
        <Projetos/>
        <Contato/>

    </div>
  );
}

export default App;
