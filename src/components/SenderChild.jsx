function SenderChild (props) {
    console.log(props)
    return (
        <>
        <h2>Sender Child</h2>
        <button onClick={() => props.update("goodbye")}>Click Me</button>
        </>
    )
}

export default SenderChild