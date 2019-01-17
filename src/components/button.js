import styled,{css} from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    outline:none;
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

export {
    Button
}