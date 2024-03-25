import { useState } from "react"
import ChildOne from "./ChildOne";

export default function ParentOne(){
    const [data, setData] = useState();

    const parentToChild = () => {
        setData("This is the data from the parent page that will be passed to the child page")
        //Parent -> Child
        //Pushing Data down
    }
    return(
        <>
            <ChildOne parentToChild={data}/> 
            <button onClick={() => parentToChild()}>Click parent to child</button>
        </>
    )
}
