import logo from './imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css'
import { PiHouseFill } from "react-icons/pi";
export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' className="logo"/>
            <ul>  
                <Menu icone={<PiHouseFill size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Home"/>
                <Menu icone={<PiHouseFill size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Explorar"/>
                <Menu icone={<PiHouseFill size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Mensagens"/>
                <Menu icone={<PiHouseFill size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Notificações"/>
                <Menu icone={<PiHouseFill size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Publicar"/>
                <Menu icone={<PiHouseFill size="2vw" style={{
                    color:'black',
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Perfil" className="perfil"/>
            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;