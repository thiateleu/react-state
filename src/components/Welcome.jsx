function Welcome(props) {
    console.log(props);
     const sample = [1,2,3,4];
     for (let i=0; i<sample.length; i++) {
        console.log(sample[i]);
     }
    // console.log(props.name);

    // I want to access the things that I passed in from App
    // so, I need to access my props object
    // When I do that, the key needs to match how it was named when it was passed in

    // the variables that I am accessing in the return need to be wrapped in{}
    // because that is jsx
    // but I can have a function outside of this that accesses variables the way that we are used to
    return (
        <h2 style={props.style}>Hello, {props.name}!</h2>
    )
}

export default Welcome