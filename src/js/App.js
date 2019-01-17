import React from 'react';
import LifeCycle from './LifeCycle';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            tit: '传递的标题属性',
            name: '我是父组件传递的属性'
        }
    }

    setTit = () => {
        this.setState({
            tit: '我是被传递到子组件的属性！！！'
        })
    }
    
    render(){
        return (
            <div>
                <section style={{marginBottom:'100px'}}>
                    <h1>关于生命周期</h1>
                    <LifeCycle title={this.state.tit}/>
                    <hr />
                    <p>父组件内部的属性：{this.state.tit}</p>
                    <button onClick={this.setTit}>父组件按钮</button>
                </section>
            </div>
        )
    }
}

export default App;