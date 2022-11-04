import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Amiibo() {

    let navigate = useNavigate()

    const showAmiibo = (amiibos, i ) =>{
        console.log('its the '+ amiibos[i].name +' amiibo')
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

    return (
        <div className='amiibo-main'>
            <h1>
                amiibo 
            </h1>
        <div className='grid'>
            {
               amiibos.map((amiibo, i) => (
                <ul key={amiibo.tail}
                    onClick={() => showAmiibo(amiibos, i)}>
                    <img src={amiibo.image} alt={amiibo.name}/>
                    <h1> {amiibo.name} </h1>


                </ul>
               ))
            }
        </div>
        </div>
    )
}