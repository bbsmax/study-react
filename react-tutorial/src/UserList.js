import React from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, active, id } = user;
    return (
        <div><b onClick={() => onToggle(id)}>{username} </b><span>({email})</span><button onClick={() => onRemove(id)}>삭제</button></div>
    );
}

function UserList({ users, onRemove, onToggle }) {

    return (
        <>
            {
                users.map(item => (<User user={item} onRemove={onRemove} onToggle={onToggle} key={item.id} />))
            }
        </>
    );
}

export default UserList;