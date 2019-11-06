import React, { useState } from 'react';

function InputSample() {
    const [inputtxt, setText] = useState("");
    const changeHandler = (e) => {
        console.log("change Handler !!", e.target.value)
        setText(e.target.value);
    }

    const initHandler = () => {
        setText("");
    }
    return (
        <div>
            <input onChange={changeHandler} value={inputtxt} />
            <button onClick={initHandler}>초기화</button>
            <h1>바뀌값은 : {inputtxt}</h1>
        </div>
    );
}

export default InputSample;