import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Mounting'
             
        }
        console.log('LifeCycleB => Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB => getDerivedStateFromProps')
        return null
    }

    componentDidMount(){

        console.log('LifeCycleB => componentDidMount')

    }
    
    render() {
            console.log('LifeCycleB => render')
            return <div>Mounting-LifeCycleMethodsB</div>
        
    }
}

export default LifeCycleB
