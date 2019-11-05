import React, {useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0);

    const onIncrement = () => {
        console.log("+1")
        setNumber(prevNumber => prevNumber + 1) //이전상태값을 관리한다.
    }
    const  onDecrement = () => {
        console.log("-1")
        //setNumber(number - 1) 이와같이 설정할 수 있다. 테스트 합니다.
        setNumber(prevNumber => prevNumber -1)
    }
    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
        </>
    )
}

export default Counter;