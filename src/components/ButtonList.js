import React from 'react'
import Button from './Button'

const list = ['All', 'Music', 'Live', 'Rituals', 'Bhajan', 'Cricket', 'Disha Vakani', 'Velentines', 'Playlist', 'Ghazal', 'Arijit Singh', 'Mixes']

const ButtonList = () => {
    return (
        <div className='flex'>

            {
                list.map((ele, ind) => {
                    return <Button name={ele} key={ind} />
                })
            }

            {/* <Button name='All' />
            <Button name='Music' />
            <Button name='Live' />
            <Button name='Song' />
            <Button name='Rituals' />
            <Button name='Bhajan' />
            <Button name='Cricket' />
            <Button name='Disha Vakani' />
            <Button name='Velentines' />
            <Button name='Playlist' />
            <Button name='Ghazal' /> */}
        </div>
    )
}

export default ButtonList
