import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaHeart,FaRegHeart,FaRegBookmark, FaBookmark } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { PiDotsThreeBold } from "react-icons/pi";
import "./feed.css"
import { useState } from "react";


export default function Publicacao(props){
    const [curtir, setCurtir] = useState(false);
    const [salvo, setSalvo] = useState(false);
    return(
    <>
        <div className="publicacao">
            <div className="containerUser">
                <img className="poster" src={props.user} alt={props.userNome}></img>
                <span className="nomePoster">{props.userNome}</span>
                <span className="horaPoste">&bull; {props.hora}</span>
                <span className="verificadoPoste">
                    {props.verificado ? <RiVerifiedBadgeFill color="rgb(00, 149, 256)" size="20px"/> : <RiVerifiedBadgeFill display="none"/> }
                </span>
                <button className="tresPontosPoste"><PiDotsThreeBold size="20px"/></button>
            </div>
            <div className="containerFoto">
            <img src={props.imagem} alt={props.altImg}></img>
            </div>
            <div className="containerInteracoes">
                <button onClick={() => {setCurtir(!curtir)}}>{curtir ? <FaHeart size="30px"  color="red"/> : <FaRegHeart size="30px"/>}</button>
                <button><IoChatbubbleOutline size="30px"/></button>
                <button><LuSend size="30px"/></button>
                <button onClick={() => {setSalvo(!salvo)}}>{salvo ? <FaBookmark size="30px"/> : <FaRegBookmark size="30px"/>}</button>
            </div> 
        </div>
    </>
    )
}