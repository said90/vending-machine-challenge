import styled from 'styled-components';
import {compose, shadow,space,layout,border,flexbox,position} from 'styled-system';

const Image = styled.img(compose(shadow,space,layout,border,flexbox,position));

export default Image;

