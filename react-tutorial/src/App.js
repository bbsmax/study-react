import React, { useState, useRef, useMemo, useCallback } from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from './InputSample';
import MultiInput from './MultiInput';
import UserList from './UserList';
import Create from './Create';

function countActiveUsers(users) {
  console.log("활성사용자 수 ::::")
  return users.filter(user => user.active).length;
}

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

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value
    })
  }, [inputs]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(item => item.id !== id))
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(item =>
      item.id === id ? { ...item, active: !item.active } : item
    ))
  }, [users]);

  const onCreate = useCallback(() => {
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
  }, [username, email, users]);

  const onInit = () => {
    console.log("초기화")
    //inputs 상태값을 초기화 
    setInput({
      username: '',
      email: '',
    });

    initInput.current.focus();

  }

  //useMemo을 사용함으로써 users가 바뀔때만 실행됨.
  const count = useMemo(() => countActiveUsers(users), [users]);


  //useCallback 은 함수를 재사용함.

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
      <div>활성사용자 수 : {count}</div>
    </>

  );
}

export default App;
