import React from 'react';

class EventToggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
            isToggleTwoOn: true,
            sex: 1,
            city: '',
            citys: [
                {id: 1,name: '北京'},
                {id: 2,name: '天津'},
                {id: 3,name: '河北'},
                {id: 4,name: '陕西'},
            ],
            hobby: [
                {
                    label: '跑步',
                    checked: false,
                },
                {
                    label: '唱歌',
                    checked: false,
                },
                {
                    label: '看书',
                    checked: false,
                }
            ],
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

    inputChange = (event) =>{
        // 获取input输入值第一种方法
        console.log(event.target.value)
        // 获取input输入值第二种方法
        console.log(this.refs.name.value)
    }
    
    handleSex = (e) => {
        console.log(e.target.value)
        this.setState({
            sex: e.target.value
        })
    }

    handleCity = (e) => {
        console.log('eeeee', e.target.value)
        this.setState({
            city: e.target.value
        })
    } 

    handleCheckbox = (key) =>{
        var hobby = this.state.hobby;

        hobby[key].checked = !hobby[key].checked;

        this.setState({
            hobby: hobby
        })
    }


    render(){ 
        return(
            <div>
                <h1>事件处理</h1>
                <label>事件切换-点击按钮触发：</label>
                {/*  事件绑定写法一  */}
                <button onClick={this.handleClickOne.bind(this)}>{this.state.isToggleOn?'ON':'OFF'}</button>
                <br />
                <label>事件切换-点击按钮触发：</label>
                 {/* 事件绑定写法二  */}
                <button onClick={this.handleClickTwo}>{this.state.isToggleTwoOn?'ON':'OFF'}</button>
                <br />
                <a href="#" onClick={this.preventDefaultEvent}>阻止默认事件</a>
                <br />
                <button onClick={this.state.handleClickThis}>关于this绑定的方法</button>
                <br />
                <button onClick={(e) => this.handleClickThisTwo(e)}>关于this绑定的方法</button>
                <br />
                <input ref="name" onChange={this.inputChange} /> 
                <br />
                {/*  表单的单选框  */}
                <input type="radio" checked={this.state.sex == 1} value="1" onChange={this.handleSex} />
                <input type="radio" checked={this.state.sex == 2} value="2" onChange={this.handleSex} />
                <br />
                {/*  下拉框实现  */}
                <select value={this.state.city} onChange={this.handleCity}>
                    {
                        this.state.citys.map( (item,idx) => {
                            return (
                                <option value={item.id} key={idx}>{item.name}</option>
                            )
                        })
                    }
                </select>
                <br />
                {/* 复选框实现 */}
                {
                    this.state.hobby.map( (item,idx) => {
                        return ( 
                            <div key={idx}>
                                <input id={'hobby'+idx} type="checkbox" checked={item.checked} onChange={this.handleCheckbox.bind(this, idx)} />
                                <label htmlFor={'hobby'+idx}>{item.label} </label>
                            </div>
                        )
                    })
                }
                <br />
            </div>
        )
    }
}

export default EventToggle;