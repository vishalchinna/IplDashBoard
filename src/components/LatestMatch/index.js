import './index.css'

const LatestMatch = prop => {
  const {latestMatch} = prop
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <li className="competing-box">
        <p className="competing">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="cmn">{venue}</p>
        <p className="cmn">{result}</p>
      </li>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo"
      />
      <li className="result-box">
        <p className="cmn">First Innings</p>
        <p className="cmn">{firstInnings}</p>
        <p className="cmn">secondInnings</p>
        <p className="cmn">{secondInnings}</p>
        <p className="man-of-match">Man Of The Match</p>
        <p className="cmn">{manOfTheMatch}</p>
        <p className="cmn">Umpires</p>
        <p className="cmn">{umpires}</p>
      </li>
    </div>
  )
}

export default LatestMatch
