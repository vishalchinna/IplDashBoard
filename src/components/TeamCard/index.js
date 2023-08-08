import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = prop => {
  const {details} = prop
  const {teamImageUrl, id, name} = details
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="card-container">
        <img src={teamImageUrl} alt={name} className="card-image" />
        <p className="card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
