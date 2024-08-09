function Clock (props) {
    //console.log(props)
    return (
        <div>
        <h3>This is the Clock Component</h3>
        <h1 style={{ color: props.color}}>{props.time}</h1>
        </div>
    )
}

export default Clock;