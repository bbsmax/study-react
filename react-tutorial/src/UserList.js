import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, active, id } = user;
    // useEffect(() => {
    //     //처음나타날때도 실행됨
    //     //컴포넌트가 생성될 때 실행되는 부분. 화면에 나타난 이후
    //     //useEffect, []이부분은 의존되는 부분.
    //     //props 상태, RestAPI, D3 Vedeo.js, setInterval, setTimeout

    //     console.log("컴포넌트 나타남.");
    //     return () => {
    //         //뒷정리함수.
    //         //unmount 
    //         //clearinterval, cleartimeout
    //         //라이브러리 instance 제거
    //         //뒷정리함수.
    //         console.log("화면에서 사라짐.")
    //     }
    // }, [])

    //[]에 의존 객체를 넣었을 경우 의존객체가 변경될 때 마다 해당 함수가 실행됨.
    useEffect(() => {
        console.log("user 값이 설정됨")
        console.log("user : ", user); //특정값이 업데이트 된 실행됨.
        return () => {
            console.log("user 값이 바뀌기 전");
            console.log("user : ", user);
        }
    }, [user])

    // useEffect(() => {
    //     console.log("user : ", user);
    //     //이렇게 작성하였을 경우 
    //     //userList가 업데이트 되면 하위컴포넌트는 부모컴포넌트가 업데이트 됨에 따라 같이 업데이트 됨.
    // })

    //useMemo는 성능최적화를 위해 사용됨.
    return (
        <div>
            <b onClick={() => onToggle(id)}
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer',
                }}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button></div>
    );
});

function UserList({ users, onRemove, onToggle }) {

    return (
        <>
            {
                users.map(item => (<User user={item} onRemove={onRemove} onToggle={onToggle} key={item.id} />))
            }
        </>
    );
}

export default React.memo(UserList);