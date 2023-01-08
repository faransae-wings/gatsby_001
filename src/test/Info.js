import React, { useEffect, useReducer } from "react";
import { Button } from "react-bootstrap";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}


const Info = () => {

    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('cleanup');
        }
    },[])

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickName: '',
    });

    const {name, nickName} = state;
    const onChange = e => {
        dispatch(e.target);
    }


    return (<>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name='nickName' value={nickName} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickName}
                </div>
            </div>

        </>
    )
}

export default Info;