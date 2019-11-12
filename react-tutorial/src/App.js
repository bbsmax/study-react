import React from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from './InputSample';
import MultiInput from './MultiInput';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: '1',
      name: 'bbsmax',
      email: 'bbsmax@nate.com',
    },
    {
      id: '2',
      name: 'nataekyun',
      email: 'nataekyun@nate.com',
    },
    {
      id: '3',
      name: 'test',
      email: 'test@nate.com',
    },
  ]
  return (
    <>
      {/* <Wrapper>
            <Hello name="react" isSpecial={true} /> 테스트 파일
            <Hello />
        </Wrapper>*/}
      {/* <Counter /> */}
      {/* <InputSample /> */}
      {/* <MultiInput /> */}
      <UserList users={users} />
    </>

  );
}

export default App;
