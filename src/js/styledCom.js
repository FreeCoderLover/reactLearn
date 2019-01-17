import React from 'react';
import styled,{css} from 'styled-components';

const TagComponent = styled.div`
    background-color: #acebef;
    min-height: 200px;
    padding: 20px;
    margin: 30px auto;
    box-sizing: border-box;
`;

const TagTit = styled.h2`
    color:#fff;
`;

const TagCon = styled.p`
    color:#fff;
`;

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor:pointer;
    :hover{
        background: palevioletred;
        color: white;
    }

    ${props =>
    props.primary &&
    css`
        background: palevioletred;
        color: white;
        :hover{
            background: transparent;
            color: palevioletred;
        }
    `};
`;

class Styled extends React.Component{
    render(){
        return(
            <TagComponent>
                <TagTit>通过“styled-components”插件设置样式</TagTit>
                <TagCon>现在我们可以开始使用它了，我们先创建一个styled component，接着我们再来看我们应该如何使用它。</TagCon>
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </TagComponent>
        )
    }
}

export default Styled;  