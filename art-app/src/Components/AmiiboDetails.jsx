import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../globals"

export default function AmiiboDetails() {

    let {name} = useParams()

    const [amiiboID, setAmiiboID] = useState('')


    useEffect(() => {
        const getAmiibo = async () => {
            const response = await axios.get(`${BASE_URL}`)
            setAmiiboID(response.data.amiibo)

            let selectedAmiibo = response.data.amiibo.find(
                amiiboID => amiiboID.name === name
            )
            setAmiiboID(selectedAmiibo)
        }
        getAmiibo()
    }, [])

    return amiiboID ? (
        <div className="amiibo-info"> 
            <h1> Amiibo Name: {amiiboID.name}</h1>

            <h2> game series: {amiiboID.gameSeries}</h2>
            <h2> type: {amiiboID.type} </h2>
            <h2> Amiibo series: {amiiboID.amiiboSeries} </h2>



            <img className="amiibo-image"
            src={amiiboID.image} 
            alt="AMIIBO image"/> 
        </div>
    ): null;
}