import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const ComponentDetail = () => {
    const {id} = useParams()
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])

    useEffect(() => {
        getPosts()
    },[]);

    const getPosts = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const postDetail = await data.json()
        setTitle(postDetail.title)
        setBody(postDetail.body)
    }

    return (
        <div>
            <h1>Post detail</h1>
            <hr/>
            <h2>{title}</h2>
            <br/>
            <p>{body}</p>
        </div>
    )
}

export default ComponentDetail
