import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"

const AllPlayers = () => {
    const [allPlayers, setPlayers] = useState([])

    useEffect(() => {
        async function fetchAllPLayers () {
            const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players');
            console.log(data.data.players)
            setPlayers(data.data.players);
        }
        fetchAllPLayers() ;
    },[])

    return (
        <div>
            <h1> These are our players!! </h1>
        {
            allPlayers.map((player) => {
                return(
                    <div key={player.id}> 
                        <Link to={`/players/${player.id}`}>{player.name}</Link>
                    </div>
                )
            })
        } 
        </div>
    )
}

export default AllPlayers