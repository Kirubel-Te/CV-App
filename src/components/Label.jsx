export default function Label(props){
    return(
        <>
            <label htmlFor={props.htmlFor}>{props.desc} </label><br/>
            <input id={props.htmlFor} type={props.type} name={props.name} value={props.value} onChange={props.onChange} required/>
        </>
    )
}