import React, { useState, useRef } from 'react';

function MultiInput() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    const { name, nickname } = inputs;
    const useInput = useRef()

    const onChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        console.log("name, value : ", name, value);

        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onClick = () => {
        setInputs({
            name: '',
            nickname: '',
        })

        useInput.current.focus();
    }

    return (
        <>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={useInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onClick} >초기화</button>
            <h2>{name}({nickname})</h2>
        </>
    );
}

export default MultiInput;