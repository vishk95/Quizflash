function Navitem(props) {
    return (
        <li className="navlinks">
            <a className="navitems" href={props.link}>
                {props.item}
            </a>
        </li>
    )
}

export default Navitem;