import styled from 'styled-components';
import {compose,space,color,layout,border,flexbox,position, variant} from 'styled-system';

const Label = styled.p(compose(space,color,layout,border,flexbox,position,variant({ variants: {
    TextTitle: {
      fontSize:'1.2rem',
      fontWeight:'bold',
      my:"10px"
    },
    TextBody: {
      fontSize:'1rem',
      color: 'red',
      my:"5px"
    },
  }
})));

export default Label;