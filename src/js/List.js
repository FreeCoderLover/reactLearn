import React from 'react';

class List extends React.Component{
    constructor(){
        super();
    }

    render(){
        let arr = ['苹果','香蕉','杏子'];
        arr = arr.map( (v,i) => {
            return <li key={i}>{v}</li>
        })
        return(
            <div>
                <h1>6、列表渲染</h1>
                <ul>
                    {arr}
                </ul>
            </div>
        )
    }
}

export default List;