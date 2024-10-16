

const VideoCard = ({ info }) => {

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="m-2 p-1 w-64 cursor-pointer shadow-lg">
            <img className='rounded-xl hover:rounded-none' src={thumbnails.medium.url} alt="Video-Card" />
            <ul>
                <li className="font-bold">{title}</li>
                <li className="text-gray-600">{channelTitle}</li>
                <li className="text-gray-600">{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard;
