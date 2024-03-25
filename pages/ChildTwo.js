
export default function ChildTwo({childParent}) {
    const data = "This is the data from the child page sent to the parent page"
    //Child data -> Parent
    //Pushing data up
    return(
        <>
        <button onClick={() => childParent(data)}>Click Child to Parent</button>
        </>
    )
}