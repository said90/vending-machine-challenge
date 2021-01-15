import styled from 'styled-components';
import {compose, shadow,space,color,layout,border,flexbox,position} from 'styled-system';

const Box = styled.div(compose(shadow,space,color,layout,border,flexbox,position));

export default Box;