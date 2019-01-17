import React from 'react';

class Detail extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        console.log(this)
    }


    render(){
        return(
            <div>
                详情页面  哈啦啦啦
            </div>
        )
    }
}

export default Detail;