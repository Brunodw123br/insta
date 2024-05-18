
import './App.css';
import Esquerda from './componentes/estatico/conteudoLaterilEsquerdo/ConteudoLateralEsquerda';
import ConteudoCentral from './componentes/conteudoCentral/ConteudoCentral';
import Direita from "./componentes/conteudoDireito/ConteudoLateralDireita.js"
// JSX 

function App() {
  return (
    <>
      <Esquerda />

      <div className='conteudoCentral'>
        <ConteudoCentral/>
      </div>
      
      <div className='conteudoLateralDireita'>
        <Direita/>
      </div>
    </>
  );
}

export default App;
