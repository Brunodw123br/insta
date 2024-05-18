import Bruno from "../../imagens/Bruno.jpg"
import ThiagoSantinele from "../../imagens/ThiagoSantinele.png"
import AvaMax from "../../imagens/AvaMax.png"
import Madonna from "../../imagens/Maddona.jpg"
import Orochinho from "../../imagens/Orochinho.png"
import Ismeiow from "../../imagens/Ismeiow.png"
import "./direita.css"
export default function Direita() {
    return (
        <>
            <div className="conteudoDireita">
                <div className="conta">
                    <img src={Bruno} alt="Usuario"></img>
                    <div>
                        <p>Bruno</p>
                        <small>brunodw123</small>
                    </div>

                    <a href="#">Mudar</a>
                </div>
                <p>Sugestões para você</p>
                <div className="conta">
                    <img src={ThiagoSantinele} alt="Usuario"></img>
                    <div>
                        <p>Thiagosantineli</p>
                        <small>sugestão patrocinada</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={AvaMax} alt="Usuario"></img>
                    <div>
                        <p>Ava max</p>
                        <small>Sugestão para você</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={Orochinho} alt="Usuario"></img>
                    <div>
                        <p>Orochinho</p>
                        <small>Sugestão para você</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={Madonna} alt="Usuario"></img>
                    <div>
                        <p>Maddona </p>
                        <small> 3 Pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={Ismeiow} alt="Usuario"></img>
                    <div>
                        <p>Ismeiow</p>
                        <small>2 Pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Imprensa</a></li>
                    <li><a href="#">Api</a></li>
                    <li><a href="#">Carreiras</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Termos</a></li>
                    <li><a href="#">Localização</a></li>
                    <li><a href="#">Idiomas</a></li>
                    <li><a href="#">verificado</a></li>
                </ul>

                <p>&copy; 2024 INSTAGRAM DO PROA</p>
            </div>
        </>
    )
}