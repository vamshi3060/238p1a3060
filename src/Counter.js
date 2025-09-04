import React,{Component}from'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={

            count:0,
        };
    }
    handleIncrement=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1,
        }));
    };
    render(){
        return(
            <div style={{ textAlign:'center',marginTop:'50px'}}>
                <h2>React Class Component Counter</h2>
                <p>count:{this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
        
    }
}
export default Counter;