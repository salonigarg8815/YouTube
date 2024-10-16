import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }


    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex col-span-1 cursor-pointer'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdqgxY6HhT6trjf7ASBTrRnLnNLXnlT8WYw&s"
                    alt="menu" className='h-6 mt-5 ' onClick={() => toggleMenuHandler()} />

                <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                    alt="Youtube-Logo" className='h-16 mx-2' />
            </div>
            <div className='mt-2 col-span-10 text-center'>
                <input type="text" placeholder='Search' className='w-1/2 border border-gray-400 p-2 rounded-l-full' />
                <button className=' border border-gray-400 p-2 rounded-r-full bg-gray-100'> 🔍</button>
            </div>
            <div className='col-span-1 flex cursor-pointer'>
                <img className='h-6 mt-4' src=" https://cdn.pixabay.com/photo/2020/10/31/06/28/youtube-bell-icon-5700370_1280.png"
                    alt="notification" />

                <img className='h-5 mx-6 mt-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSB5-90MkKX8VF-tqHsBo29SDYIoKTHBrdA&s"
                    alt="video" />

                <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                    alt="user-icon" className='h-10 mt-2' />
            </div>
        </div>
    )
}

export default Head;
