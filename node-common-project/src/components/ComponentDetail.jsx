import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const ts = '1'
const apyKey = 'b31d2910c247b1ac801419d534c6c74e'
const hash = '8a181f07de9f02929051ceafcdfab96a'
const maxElements = 1500

const ComponentDetail = () => {
    const { id } = useParams()
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [comics, setComics] = useState([])
    const [img, setImg] = useState()

    useEffect(() => {
        getPosts()
    }, []);

    const getPosts = async () => {
        const url = `http://gateway.marvel.com/v1/public/characters/${id}?&ts=${ts}&apikey=${apyKey}&hash=${hash}`
        const data = await fetch(url)
        const postDetail = await data.json()
        setName(postDetail.data.results[0].name)
        setDescription(postDetail.data.results[0].description)
        setComics(postDetail.data.results[0].comics.items)
        setImg(`${postDetail.data.results[0].thumbnail.path}.${postDetail.data.results[0].thumbnail.extension}`)

        console.log(img)
        
    }
    
    return (
        <div>
            <img src = {img}/>
            <h1>Character detail</h1>
            <hr />
            <h2>{name}</h2>
            <br />
            <p>{description}</p>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th>Comics</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comics.map(comic => (
                            <tr>
                                <td>
                                    {comic.name}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ComponentDetail
