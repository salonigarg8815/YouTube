import React from 'react'

const commentData = [
    {
        name: "Saloni Garg",
        Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
        replies: [
            {
                name: "Saloni Garg",
                Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
                replies: [{
                    name: "Saloni Garg",
                    Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
                    replies: [{
                        name: "Saloni Garg",
                        Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
                        replies: []
                    }]
                }]
            }
        ]
    },
    {
        name: "Saloni",
        Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
        replies: [
            {
                name: "Saloni",
                Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
                replies: []
            }
        ]
    },
    {
        name: "Saloni",
        Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
        replies: [
            {
                name: "Saloni",
                Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
                replies: []
            }
        ]
    },
    {
        name: "Saloni",
        Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
        replies: [
            {
                name: "Saloni",
                Comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tenetur.",
                replies: []
            }
        ]
    }
]

const Comment = ({ data }) => {
    const { name, Comment, replies } = data
    return (<>
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-sm my-2'>
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                alt="user-icon" className='w-8 h-8' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{Comment}</p>
            </div>
        </div>
    </>)
}

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-6 border border-l-black ml-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ))

}

const CommentsContainer = () => {
    return (
        <div className='m-3 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentList comments={commentData} />
        </div>
    )
}

export default CommentsContainer
