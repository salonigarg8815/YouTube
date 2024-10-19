import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if (!isMenuOpen) return null;
    return (
        <div className='p-5 pr-3 shadow-lg w-52 m-2 '>

            <ul>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Sorts</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Video</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Live</li>
            </ul>

            <h1 className='font-bold pt-2'>Subscriptions</h1>
            <ul>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Music</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Sports</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Gaming</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Movies</li>
            </ul>

            <h1 className='font-bold pt-2'>Explore</h1>
            <ul>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Trending</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Shopping</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>News</li>
                <li className='hover:bg-gray-200 rounded-lg cursor-pointer px-2'>Course</li>
            </ul>
        </div>
    )
}

export default Sidebar
