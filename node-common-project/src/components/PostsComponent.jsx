import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const PostsComponent = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsList = await data.json()
        setPosts(postsList)
    }

    return (
        <div>
            <h1>Posts list</h1>
            <hr/>
            <table className = "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr>
                                <td>
                                    <Link to = {`/posts/${post.id}`}>{post.id}</Link>
                                </td>
                                <td>
                                    {post.title}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PostsComponent
