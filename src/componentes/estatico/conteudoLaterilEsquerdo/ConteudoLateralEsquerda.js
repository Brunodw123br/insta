import logo from '../../../imagens/images.png';
import Menu from './TextMenu';
import Bruno from "../../../imagens/Bruno.jpg"
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
                <Menu icone={<PiHouseFill size="30px" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Home" class="text-menu"user={false}/>
                <Menu icone={<IoSearch size="30px" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Explorar" class="text-menu" user={false}/>
                <Menu icone={<LiaFacebookMessenger size="30px" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Mensagens" class="text-menu" user={false}/>
                <Menu icone={<CiHeart size="30px" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Notificações" class="text-menu" user={false}/>
                <Menu icone={<CgAddR size="30px" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Publicar" class="text-menu" user={false}/>
                <Menu className="perfil" icone={Bruno} user={true} nome="Bruno" class="perfil"/>
            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;