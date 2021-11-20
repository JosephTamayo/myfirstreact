import { useEffect, useState } from "react";
import helloService from "../Services/helloService.js"

//function - arrow function
// function Hello() - normal function "stateless"
const Hello = () => {
    //function hooks
    const [hello, setHello] = useState("")

    //hooks
    useEffect(() => {
        helloService.getHi()
        .then(
            response => {
                setHello(response.data);
            }
        )
        .catch(
            err => {console.log("something went wrong")}
        )
    })
    return hello;
}
export default Hello;