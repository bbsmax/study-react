import React from 'react'

function Hello({name, isSpecial}) {
    return (
        <>
            <div>
                {isSpecial && <b>*</b>}Hello 안녕하세요. {name}
            </div>
        </>
    );
}

Hello.defaultProps = {
    name : "pink"
}

export default Hello;