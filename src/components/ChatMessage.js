import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center'>
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                alt="user-icon" className='h-10 mt-1' />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage
