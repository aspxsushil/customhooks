import React from 'react';
import useCounter from './useCounter';

function DocTitleOne() {    
   const count = useCounter();
    return(
        <div>
         <p>{count}</p>
        </div>
    )
}

export default DocTitleOne;