import React from 'react';

function Create({ onChange, onCreate, onInit, initInput, username, email }) {
    return (
        <>
            <input name="username" value={username} onChange={onChange} placeholder="이름" ref={initInput} />
            <input name="email" value={email} onChange={onChange} placeholder="이메일" />
            <button onClick={onCreate}>확인</button>
            <button onClick={onInit}>초기화</button>
        </>
    )
}

export default Create;