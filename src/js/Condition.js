import React from 'react';

class Condition extends React.Component{
    constructor(props){
        super(props);
        console.log('props',props);
        this.state = {
            isIn: props.isIn
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({
            isIn: false
        })
    }

    handleLogoutClick(){
        this.setState({
            isIn: true
        })
    }

    render(){
        let context = null;

        if(this.state.isIn){
            context = (
                <div>
                    <h1>5、条件渲染</h1>
                    <p>我是未登录状态.....^_^.....</p>
                    <button onClick={this.handleLoginClick}>登录</button>
                </div>
                )
        }else{
            context = (
                <div>
                    <h1>5、条件渲染</h1>
                    <p>我是登录状态+++++*_*+++++</p>
                    <button onClick={this.handleLogoutClick}>退出</button>
                </div>
            )
        }

        return (
            <div>
                {context}
                {
                    this.props.isShow && 
                    <p>通过运算符渲染ui</p>
                }
                {
                    this.props.isShow ? (
                        <p>通过三目运算符渲染的数据-true</p>
                    ):(
                        <p>通过三目运算符渲染的数据-false</p>
                    )
                }
            </div>
        )
        
    }
}

export default Condition;