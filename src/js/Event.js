import React from 'react';

class EventToggle extends React.Component{
    constructor(){
        super();
        this.state = {
            isToggleOn: true,
            isToggleTwoOn: true,
            handleClickThis: () => {
                console.log('this' ,this);
            }
        }

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClickTwo = this.handleClickTwo.bind(this);
    }
    
    handleClickOne(){
        // 写法一
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    handleClickTwo(){
        // 写法二 
        this.setState(prevState => ({
            isToggleTwoOn: !prevState.isToggleTwoOn
        }))
    }

    // 去掉默认事件
    preventDefaultEvent(e){
        e.preventDefault();
        console.log('阻止了a标签的默认事件')
    }

    handleClickThisTwo(){
        console.log('two' ,this);
    }


    render(){ 
        return(
            <div>
                <h1>4、事件处理</h1>
                <label>事件切换-点击按钮触发：</label>
                {/* 事件绑定写法一 */}
                <button onClick={this.handleClickOne.bind(this)}>{this.state.isToggleOn?'ON':'OFF'}</button>
                <br />
                <label>事件切换-点击按钮触发：</label>
                {/* 事件绑定写法二 */}
                <button onClick={this.handleClickTwo}>{this.state.isToggleTwoOn?'ON':'OFF'}</button>
                <br />
                <a href="#" onClick={this.preventDefaultEvent}>阻止默认事件</a>
                <br />
                <button onClick={this.state.handleClickThis}>关于this绑定的方法</button>
                <br />
                <button onClick={(e) => this.handleClickThisTwo(e)}>关于this绑定的方法</button>
            </div>
        )
    }
}

export default EventToggle;