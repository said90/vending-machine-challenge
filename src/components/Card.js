import React from 'react';
import Box from './Box'

const Card  = (props) => {
    return ( 
        <Box 
        border={1}
        boxShadow='1px 1px 5px rgba(0,0,0,0.2)'
        zIndex={2}
        p={10}
        borderRadius={10}
        bg='accent'
        maxWidth={200}
        m={10}  
        {...props}
        >
        {props.children}
        </Box>
     );
}
 
export default Card ;