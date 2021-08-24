import {  useState } from "react";

function useCounter(){
    const [count,setCount] =useState(0);
    setTimeout(function(){ setCount(count + 1); }, 3000);

    return count;
}

export default useCounter;