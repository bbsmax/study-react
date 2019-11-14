import React, { useState, useRef, useEffect } from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from './InputSample';
import MultiInput from './MultiInput';
import UserList from './UserList';
import Create from './Create';

function App() {

  //user 상태관리하기위해 useState을 사용함.

  const [users, setUsers] = useState([
    {
      id: '1',
      username: 'bbsmax',
      email: 'bbsmax@nate.com',
      active: true,
    },
    {
      id: '2',
      username: 'nataekyun',
      email: 'nataekyun@nate.com',
      active: false,
    },
    {
      id: '3',
      username: 'test',
      email: 'test@nate.com',
      active: false,
    },
  ]);

  const [inputs, setInput] = useState({
    username: '',
    email: '',
  });

  const nextId = useRef(4);
  const initInput = useRef();
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value
    })
  };

  const onRemove = id => {

  };

  const onToggle = id => {

  };

  const onCreate = () => {
    onInit();
    console.log("::: username ::::", username);
    const newUser = {
      id: nextId.current,
      username: username,
      email: email,
      active: false,
    }

    setUsers([...users, newUser])

    nextId.current++;
    console.log("nextId : ", nextId);
  }

  const onInit = () => {
    console.log("초기화")
    //inputs 상태값을 초기화 
    setInput({
      username: '',
      email: '',
    });

    initInput.current.focus();

  }

  return (
    <>
      {/* <Wrapper>
            <Hello name="react" isSpecial={true} /> 테스트 파일
            <Hello />
        </Wrapper>*/}
      {/* <Counter /> */}
      {/* <InputSample /> */}
      {/* <MultiInput /> */}
      <Create username={username} email={email} onInit={onInit} initInput={initInput} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>

  );
}

export default App;
