
import useCounter from "../countercustomhook.jsx/useCounter";

function Counterhooktest (){
    const { count , increment ,decrement,reset} = useCounter(0, 2);

return(
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
);

}
export default Counterhooktest;

