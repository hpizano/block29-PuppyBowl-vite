import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/players'> Players </Link>
            <Link to='/players/:id'> Individual </Link>
        </div>
    )
}

export default Nav