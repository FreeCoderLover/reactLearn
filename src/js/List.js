import React from 'react';
import {NavLink} from 'react-router-dom';

class List extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let arr = ['使用动态路由设置路由跳转','香蕉','杏子'],
            arr2 = ['使用get方法设置动态路由跳转','开心','不开心'];

        arr = arr.map( (v,i) => {
            return <li key={i}><NavLink to={`/Detail/${i}`}>{v}</NavLink></li>
        });

        arr2 = arr2.map( (v,i) => {
            return <li key={i}><NavLink to={`/Detail?id=${i}`}>{v}</NavLink></li>
        })

        return(
            <div>
                <h1>列表渲染</h1>
                <ul>
                    {arr}
                </ul>
                <ul>
                    {arr2}
                </ul>
            </div>
        )
    }
}

export default List;