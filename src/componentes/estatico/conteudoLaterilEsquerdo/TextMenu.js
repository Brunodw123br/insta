
export default function TextMenu(props) {
    return (
      <li className={props.class}>
        {props.icone}
        {props.nome}
      </li>
    );

}