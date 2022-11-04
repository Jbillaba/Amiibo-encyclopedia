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
        <div className="amiibo-details"> 
            <h1> {amiiboID.name}</h1>
            <p> {amiiboID.character}</p>
        </div>
    ): null;
}