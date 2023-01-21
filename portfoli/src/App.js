import { Routes, Route} from "react-router-dom";

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import NavBar from "./components/NavBar";


//import './App.css';

function App() {
  return (
    <div className="App">

          <NavBar/>
          <Routes>

            <Route exact path="/" element={<Home/>}/>
            <Route path="/Sobre" element={<Sobre/>}/>
            <Route path="/Projetos" element={<Projetos/>}/>
            <Route path="/Contato" element={<Contato/>}/>
            
          </Routes>

    </div>
  );
}

export default App;
