import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("")

    const chatMessages = useSelector(store => store.chat.message)

    useEffect(() => {
        const i = setInterval(() => {
            console.log("API POlling")

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20) + "🚀"
            }))
        }, 2000)
        return () => clearInterval(i)
    }, [])

    return (
        <>
            <div className='ml-6 h-[420px] w-96 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {
                        chatMessages.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message} />))
                    }

                </div>
            </div>
            <form className='w-full p-2 ml-2 flex border border-black'
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addMessage({
                        name: "Saloni Garg",
                        message: liveMessage
                    }))
                    setLiveMessage("");
                }}>

                <input className=" w-80 px-2" type="text"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)} />

                <button className='px-2 mx-2 bg-green-200 font-bold rounded-lg'>Send</button>
            </form>

        </>
    )
}

export default LiveChat
