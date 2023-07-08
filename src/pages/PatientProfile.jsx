import React, { useCallback, useState } from 'react';
import {useNavigate} from 'react-router-dom'

const PatientProfile = () => {

    const [value, setValue] = useState();

    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value]);

    const handleJoinChatRoom = useCallback(() => {
        navigate(`/ChatApp`)
    }, [navigate, value]);

    return <div>
        <input value = {value} onChange = {e => setValue(e.target.value)} type='text' placeholder='Enter Room Code'/>
        <button onClick={handleJoinRoom}>Join</button>
        <button onClick={handleJoinChatRoom}>Join ChatRoom</button>
    </div>
}

export default PatientProfile;