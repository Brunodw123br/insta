import logo from '../../../imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css'
import { PiHouseFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' className="logo"/>
            <ul>  
                <Menu icone={<PiHouseFill size="3.3vh" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Home" class="text-menu"/>
                <Menu icone={<IoSearch size="3.3vh" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Explorar" class="text-menu"/>
                <Menu icone={<LiaFacebookMessenger size="3.3vh" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Mensagens" class="text-menu"/>
                <Menu icone={<CiHeart size="3.3vh" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Notificações" class="text-menu"/>
                <Menu icone={<CgAddR size="3.3vh" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Publicar" class="text-menu"/>
                <Menu className="perfil" icone={<FaUserCircle size="3.3vh" style={{
                    color:'black',
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Perfil" class="text-menu perfil"/>
            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;