import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Amiibo() {

    let navigate = useNavigate()

    const showAmiibo = (amiibos, i ) =>{
        navigate(`${amiibos[i].name}`)
    }

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

    function searchForAmiibo(event){
      console.log('hello ')
    }

    return (
        <div className='amiibo-main'>
       
        <div className='filter-buttons'> 
            <input className='search'
                    type="text"
                    placeholder='search...'
                    onChange={(e) => setSearch(e.target.value)}>
                    </input>

            <button className='search'
                    onClick={e => searchForAmiibo(e)}> 
            search </button> 

        </div>
        <div className='grid'>
            {
               amiibos.filter((amiibo) => 
               amiibo.name.toLowerCase().includes(search)).
               map((amiibo, i) => (
                <ul className='amiibo-card' 
                key={amiibo.tail}
                    onClick={() => showAmiibo(amiibos, i)}>
                    <img className='card-image'   src={amiibo.image} alt={amiibo.name}/>
                    <h1> {amiibo.name} </h1>

 
                </ul>
               ))
            }
        </div>
        </div>
    )
}
