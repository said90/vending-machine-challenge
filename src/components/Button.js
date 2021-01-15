import styled from 'styled-components';
import {compose, shadow,space,color,layout,border,flexbox,position} from 'styled-system';

const Button = styled.button(compose(shadow,space,color,layout,border,flexbox,position),`&:focus{outline:-webkit-focus-ring-color auto 0px;};&:active {
    box-shadow: 0 2px #666;
    transform: translateY(2px);};&:hover{cursor:pointer}`);

Button.defaultProps = {
    p:'15px 25px',
    textAlign:"center",
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    boxShadow: '0 3px #999',
    bg:'primary',
    color:'white',
    borderRadius:'10px',
    width:'120px',
};


export default Button;