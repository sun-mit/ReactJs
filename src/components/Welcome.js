 import React, {Component} from "react"

 class Welcome extends Component{
     render(){
         return(
             <div>

                <h1>{this.props.name} is known as {this.props.heroName}</h1>
                
             
             </div>
             
         )
     }
 }

 export default Welcome