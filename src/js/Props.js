import React from 'react';
import { PropTypes} from 'prop-types';
import {Button} from '../components/button.js';

let setColor = {
    'color':'palevioletred',
    'fontSize':'20px'
}

class Content extends React.Component {
    constructor(props){
        super(props);
        console.log('子组件的this', this);
        console.log('子组件的props', props);

        //  将props存储到子组件的state中
        this.state = {
            val: props.val  // 父组件传递的name属性存储到子组件state中
        }
    }

    handleClick(){
        // this.props.val = '哈哈哈哈';  // 不允许修改子组件的props
        // this.props.arr.push('33333') // 父组件传递对象属性到子组件，可以修改不报错

    }

    handleSonClick(){
        this.setState({
            val: this.state.val+1
        })
    }

    sonFn = () => {
        console.log('子组件修改内容父组件可以同步更新修改')
        this.props.self.propFunc(1);
    }

    componentWillMount(){
        console.log('01 组件将要被加载！！！');
    }
    componentDidMount(){
        console.log('02 组件是加载完成！！！');
    }


    shouldComponentUpdate(){
        console.log('01 组件是否要更新！！！');
        return true;
    }
    componentWillUpdate(){
        console.log('02 组件将要被更新！！！');  
    }
    componentDidUpdate(){
        console.log('03 组件已经更新完成！！！');
    }


    componentWillReceiveProps(){
        console.log('-----父组件的属性更新了触发自组件的componentWillReceiveProps生命周期！！！');
    }
    componentWillUnmount(){
        console.log('-----组件卸载了！！！');
    }

    
    render() {
        console.log('03 组件开始渲染！！！');
        return(
            <div>
                <span style={setColor}>在子组件渲染父组件传递的props：{this.props.val}</span>
                <br />
                <Button onClick={this.handleClick.bind(this)}>子组件修改props会报错，不允许子组件修改传进来的props--------点击可查看报错</Button>
                <br />
                <Button onClick={this.props.func.bind(this,2)}>更新子组件和父组件传递的属性，不能处理子组件内部的业务</Button>
                <br />
                <Button onClick={this.sonFn}>子组件属性修改同步到父组件，且可以继续操作子组件的方法和逻辑处理</Button>
                <br />
                <span style={setColor}>在子组件将父组件传递属性存储到state：{this.state.val}</span>
                <Button onClick={this.handleSonClick.bind(this)}>将传递的props存储到自组建的state中，可以修改自身的state，此时数据是不能同步到父组件的</Button>
                <p>{this.props.arr}</p>
            </div>
        )
    }
}


class Props extends React.Component{
    constructor(){
        super();
        this.state = {
            val: 1,
            arr: ['我是数组','11111']
        }
    }

    handleClick(){
        this.setState({
            val: this.state.val+1
        }) 
    }

    propFunc = (str) =>{
        console.log('我是传递的方法',str)
        this.setState({
            val: this.state.val + str
        }) 
    }


    render(){
        return(
            <div>
                <h1>关于组件传递Props</h1>
                <span style={setColor}>父组件渲染的需要传递的属性 ：{this.state.val}</span>
                <Button onClick={this.handleClick.bind(this)}>修改父组件的state数据，同时传递的props也一起被修改</Button>
                <hr />
                <p>{this.state.arr}</p>
                <Content val={this.state.val} arr={this.state.arr} func={this.propFunc} self={this}></Content>
            </div>
        )
    }
}

// 通过组件类的 defaultProps 属性为 props 设置默认值
// Content.defaultProps = {
//     age: 100  
// }

// 验证传递的属性类型是否正确
Content.propTypes = {
    val: PropTypes.number.isRequired,
}

export default Props;