import React from "react"
class Button extends React.Component
{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    addCount = () => {
        //this.state.count = this.state.count + 1;
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }
    render(){
        return( 
            <div>
                 <p>You just got
                 
        
        
                    Jebaited!!!</p>
                 <button onClick={this.addCount}>click this</button>
                 <p>counting = {this.state.count}</p>
                 <img src="https://c.tenor.com/VFFJ8Ei3C2IAAAAM/rickroll-rick.gif"/>
                 <br></br>
            </div>
        )
    }
}
export default Button;
//<!--<iframe width="420" height="315" src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></iframe>-->