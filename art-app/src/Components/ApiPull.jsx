import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

export default function ApiPull() {

    const [amiibos, setAmiibos] = useState([])

    useEffect(() => {
        const getAmiibos = async () => {
            const response = await axios.get(`${BASE_URL}`)
            console.log(response.data.amiibo)
            setAmiibos(response.data.amiibo)
        }
        getAmiibos()
        console.log(amiibos)
    }, [])

    return (
        <div className='grid'>
            {
               amiibos.map((amiibo) => (
                <ul key={amiibo.index}>
                    <img src={amiibo.image}/>
                    <h1> {amiibo.name} </h1>


                </ul>
               ))
            }
        </div>
    )
}