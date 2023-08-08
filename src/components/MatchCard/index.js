import './index.css'

const MatchCard = prop => {
  const {matchCard} = prop
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchCard
  return (
    <div className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="card-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="status">{matchStatus}</p>
    </div>
  )
}

export default MatchCard
