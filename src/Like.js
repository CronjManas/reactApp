import React, {Component} from 'react';

class Like extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    addLikes = () => {
        
        console.log('Hello');
        this.setState({value: this.state.value+1});
        
    }
    resetLikes = () => {
        this.setState({value: 0});
    }
    minusLikes = () => {
        if(this.state.value > 0)
            this.setState({value: this.state.value-1});
        else
            console.log('Minimum limit reached');
    }
    render(){
        return (
            <div>
                <button onClick= {this.addLikes}>+</button>
                <button onClick = {this.resetLikes}>Reset</button>
                <button onClick = {this.minusLikes} > -</button>
                <p>{this.state.value}</p>
            </div>
        )
    }
    

}

export default Like;