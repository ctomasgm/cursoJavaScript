import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const ts = '1'
const apyKey = 'b31d2910c247b1ac801419d534c6c74e'
const hash = '8a181f07de9f02929051ceafcdfab96a'
const maxElements = 1500 
let offset = 0

const PostsComponent = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const url = `http://gateway.marvel.com/v1/public/characters?limit=50&offset=${offset}&ts=${ts}&apikey=${apyKey}&hash=${hash}`
        const data = await fetch(url)
        const postsList = await data.json()
        setPosts(postsList.data.results)
    }

    const increaseOffset = () => {
        if (offset<maxElements-50)
          offset = offset + 50
        else 
          offset = 0
      }
      
      const decreaseOffset = () => {
        if (offset>50)
          offset = offset - 50
        else
          offset = maxElements - 50
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
                                    {post.name}
                                </td>
                                <td>
                                    {post.description}
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
