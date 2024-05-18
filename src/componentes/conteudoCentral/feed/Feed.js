import "./feed.css"
import Zendaya from "../../../imagens/Zendaya.png"
import ZendayaPostagem from "../../../imagens/ZendayaPostagem.png"
import KitConnor from "../../../imagens/KitConnor.png"
import KitConnorPostagem from "../../../imagens/KitConnorPoste.png"
import Barbie from "../../../imagens/Barbie.jpg"
import BarbiePostagem from "../../../imagens/BarbiePostagem.png"
import Reescreveram from "../../../imagens/Reescreveram.png"
import ReescreveramPostagem from "../../../imagens/ReescreveramPostagem.png"


import Publicacao from "./Publicacao"
const publicacao = [
    {userNome: "Barbiequalquer", user: Barbie, hora: "7h", verificado: false, imagem: BarbiePostagem, altImagem : "uma menina chorando na prova com um titulo falndo que copiou a prova e tirou quatro"},
    {userNome: "Kit Konnor", user: KitConnor, hora: "2sem", verificado: true, imagem: KitConnorPostagem, altImagem : "uma menina chorando na prova com um titulo falndo que copiou a prova e tirou quatro"},
    {userNome: "Reescreveram", user: Reescreveram, hora: "5s", verificado: false, imagem: ReescreveramPostagem, altImagem : "uma menina chorando na prova com um titulo falndo que copiou a prova e tirou quatro"},
    {userNome: "Zendaya", user: Zendaya, hora: "5min", verificado: true, imagem: ZendayaPostagem, altImagem : "uma menina chorando na prova com um titulo falndo que copiou a prova e tirou quatro"},

]

export default function Feed(){
    return(
        <>
        <div className="containerFeed">
        {publicacao.map((publicacao) => (
                    <Publicacao key={publicacao.user} user={publicacao.user} userNome={publicacao.userNome} hora={publicacao.hora} verificado={publicacao.verificado} imagem={publicacao.imagem} altImagem={publicacao.altImagem} />
                ))}
        </div>
        </>
    )
}