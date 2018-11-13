import React from 'react';
import { PropTypes} from 'prop-types';

class Props extends React.Component{
    constructor(){
        super();
        console.log('props',this);
    }

    render(){
        return(
            <div>
                <h1>3、关于组件传递Props</h1>
                <p>我是父组件传递的属性(name)：{this.props.name}</p>
                <p>我是父组件传递的属性(age)：{this.props.age}</p>
            </div>
        )
    }
}

// 通过组件类的 defaultProps 属性为 props 设置默认值
Props.defaultProps = {
    age: 100 
}

// 验证传递的属性类型是否正确
Props.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default Props;