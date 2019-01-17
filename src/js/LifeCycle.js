import React from 'react';
/*
https://reactjs.org/docs/react-component.html


React生命周期函数：
    组件加载之前，组件加载完成，以及组件更新数据，组件销毁。
    触发的一系列的方法 ，这就是组件的生命周期函数

组件加载的时候触发的函数： 
    constructor 、componentWillMount、 render 、componentDidMount

组件数据更新的时候触发的生命周期函数：
    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate

你在父组件里面改变props传值的时候触发的：
    componentWillReceiveProps

组件销毁的时候触发的：
    componentWillUnmount

必须记住的生命周期函数：
    *加载的时候：componentWillMount、 render 、componentDidMount（dom操作）
    *更新的时候：componentWillUpdate、render、componentDidUpdate
    *销毁的时候： componentWillUnmount

*/
class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        console.log('01 加载构造函数！！！');
        console.log('props', this.props)
        this.state = {
            msg: '初始化数据！！'
        }
    }

    // 组件将要挂载的时候触发的函数
    componentWillMount(){
        console.log('02 组件将要挂载！！！');
    }

    // 组件挂载完成触发的生命周期函数
    componentDidMount(){
        //dom操作放在这个里面    请求数据也放在这个里面
        console.log('04 组件挂载完成！！！');
    }


    // 是否要更新数据  如果返回true才会执行更新数据的操作
    shouldComponentUpdate (nextProps,nextState){
        console.log('01 是否更新数据！！！')
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        // return false; // 返回false不会执行更新数据的操作
        return true;  //  返回true才会执行更新数据的操作
    }

    // 将要更新数据的时候触发
    componentWillUpdate(){
        console.log('02 组件将要更新！！！')
    }

    // 组件更新完成
    componentDidUpdate(){
        console.log('03 组件更新完成！！！')
    }

    //  组件销毁的时候执行的函数
    componentWillUnmount(){
        console.log('组件要被销毁了！！！')
    }

    //  在父组件修改props属性时触发
    componentWillReceiveProps(){
        console.log('父子组件传值，父组件里面改变了props的值触发的方法')
    }

    // 更新数据
    updateMsg(){
        console.log('**我是组件内部更新函数**')
        // 当shouldComponentUpdate返回false时，setState不起作用
        this.setState({
            msg: '更新当前组件的数据！！！'
        })
    }

    render(){
        console.log('03 数据渲染render！！！');

        return(
            <div>
                <p>渲染子组件内部的数据：{this.state.msg}</p>
                <button onClick={this.updateMsg.bind(this)}>更新数据</button>
                <p>在子组件内部渲染父组件传递的props数据：{this.props.title}</p>
            </div>
        )
    }
}

export default LifeCycle;