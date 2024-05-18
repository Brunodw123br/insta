
export default function TextMenu(props) {
    return (
      <li className={props.class}>
        {props.user ? <img src={props.icone}></img> : <p>{props.icone}</p>}
        {props.nome}
      </li>
    );

}