import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.a = 10;
        console.log(this);
        this.state = {
            a: 20,
            myStyle: {                 // camelCase语法设置内联样式
                fontSize:20,
                color:'red'
            },
            arr: ['渲染列表','苹果','香蕉'].map( (v,i) => {
                return <li key={i}>{v}</li>
            })
        }
    }
    
    render(){
        return (
            <div>
                <h1>1、我是react很高兴遇见你，hello！</h1>
                {this.a}<br />
                {this.state.a}<br />
                {1+1}<br />
                {this.a == 10 ? 'ok' : 'no'}
                <p style={this.state.myStyle}>设置样式属性,需要使用json格式</p>
                <ul>{this.state.arr}</ul>
                <p className="test">注意：设置元素类名，需要使用className，不能使用class</p>
            </div>
        )
    }
}

export default App;