import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const SinglePlayers = () => {
    const {id} = useParams()
    console.log(id)
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        async function fetchPlayer () {
            const {data} = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`);
            console.log(data);
            setPlayer(data);
        }
        fetchPlayer()
    }, [])

    return (
        <div>
            <h1> {player && player.data.player.name} </h1>
            <h2> {player && player.data.player.breed} </h2>
            <h3> {player && player.data.player.status} </h3>
            {/* <img src={player.data.player.imageUrl}></img> */}

        </div>
    )
}

export default SinglePlayers