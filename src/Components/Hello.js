import { useEffect, useState } from "react";
import helloService from "../Services/HelloService"


//function - arrow function
// function Hello() - normal function "stateless"\
// react - reactive
const Hello = () =>{

    //function hooks
    const [hello, setHello] = useState("click me!")

    //hooks
    useEffect( () => {
        helloService.getHello() //promises
        .then(
        response => {
            setHello(response.data);
        }    
        )
        .catch(
            err => {
                console.log("Something went wrong!")
            }
        )
    })

    return hello;
}

export default Hello;