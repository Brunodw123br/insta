
import './App.css';
import Esquerda from './componentes/estatico/conteudoLaterilEsquerdo/ConteudoLateralEsquerda';
import ConteudoCentral from './componentes/conteudoCentral/ConteudoCentral';
// JSX 

function App() {
  return (
    <>
      <Esquerda />

      <div className='conteudoCentral'>
        <ConteudoCentral/>
      </div>
      
      <div className='conteudoLateralDireita'>
        {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;
