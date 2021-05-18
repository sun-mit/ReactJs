import React, {Component} from "react"

class Message extends Component{

    constructor(){
        super()
        this.state={
            msg:'Welcome to Exabyting'
    }
}

    changeMsg(){
        this.setState({
            msg:'Thank you for visiting us.'
        })
    }

    render(){
        return(
            <div>
            <h1>{this.state.msg}</h1>
            {/*<button onClick={this.changeMsg.bind(this)}>Visit</button>*/}
            <button onClick={()=>this.changeMsg()}>Visit</button>
            </div>
            
        )
    }
}

export default Message