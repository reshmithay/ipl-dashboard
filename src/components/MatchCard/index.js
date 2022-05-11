import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  return (
    <li className={`match-card ${matchStatus}`}>
      <img
        className="match-card-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
