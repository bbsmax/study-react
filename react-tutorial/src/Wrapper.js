import React from 'react';

function Wrapper ({children}){
    const style ={
        border: "1px solid #ddd",
        padding : 10,
        backgroundColor : '#ffcc00'
    }
    return (
        <>
            <div style={style}>{children}</div>
        </>
    )
}

export default Wrapper