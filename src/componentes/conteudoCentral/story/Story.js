import "./Story.css"

export default function Story(props){
    
    
    return(
        <>
            <div className="Story">
                <div className="borderGradiante">
                {
                    props.cf ? <img src={props.foto} alt={props.nome} className="foto cf"  /> :
                    <img src={props.foto} alt={props.nome} className="foto"  />
                }
                </div>
                <span className="nome">{props.nome}</span>
            </div>
        </>
    )
}