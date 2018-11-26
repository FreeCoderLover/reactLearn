import React from 'react';

class Clock extends React.Component{
    constructor(){
        super();
        this.timer = null;
        this.state = {
            date: new Date()
        }
        console.log('clock++++++++++++',this)
    }

    // 在组件输出到 DOM 后会执行
    // componentDidMount(){
    //     this.timer = setInterval( () => {
    //         this.tick()
    //     },1000)
    // }

    // 组件从dom中移除之前立即调用
    // componentWillMount(){
    //     clearInterval(this.timer)
    // }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>2、Clock Component!!!</h1>
                <p >现在是：{this.state.date.toLocaleTimeString()}</p>
                {/*注释...
                    写在花括号内部 
                */}
            </div>
        )
    }
}

export default Clock;