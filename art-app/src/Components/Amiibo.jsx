import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

export default function Amiibo() {

    const [amiibos, setAmiibos] = useState([])

    useEffect(() => {
        const getAmiibos = async () => {
            const response = await axios.get(`${BASE_URL}`)
            setAmiibos(response.data.amiibo)
        }
        getAmiibos()
    }, [])

//followed a tutorial to get the search bar working link: https://www.youtube.com/watch?v=MY6ZZIn93V8&t=685s&ab_channel=LamaDev
    const [ search, setSearch ] = useState("");

    return (
        <div className='amiibo-main'>
       
        <div className='filter-buttons'> 
            <input className='search'
                    type="text"
                    placeholder='search....'
                    onChange={(e) => setSearch(e.target.value)}>
            </input>

        </div>

        <div className='grid'>
            {
               amiibos.filter((amiibo) => 
               amiibo.name.toLowerCase().includes(search)).map((amiibo) => (
                <ul className='amiibo-card' 
                key={amiibo.tail}>

                    <img className='card-image'   src={amiibo.image} alt={amiibo.name}/>
                    <h1> {amiibo.name} </h1>
                    <h2>Game Series: {amiibo.gameSeries}</h2>
                    <h2>Series: {amiibo.amiiboSeries}</h2>
                    <h2>Type: {amiibo.type}</h2>
                </ul>
               ))
            }
        </div>
        </div>
    )
}
