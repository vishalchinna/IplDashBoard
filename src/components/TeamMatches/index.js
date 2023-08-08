import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamUrl: '', latestMatch: [], recentMatch: [], isLoading: true}

  componentDidMount() {
    this.getDataFromId()
  }

  getDataFromId = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updateUrl = data.team_banner_url
    const updateLatestMatch = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const recentMatchData = data.recent_matches
    const updateRecentMatch = recentMatchData.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    this.setState({
      teamUrl: updateUrl,
      latestMatch: updateLatestMatch,
      recentMatch: updateRecentMatch,
      isLoading: false,
    })
  }

  render() {
    const {recentMatch, teamUrl, latestMatch, isLoading} = this.state
    console.log(recentMatch)

    return (
      <div className="team-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamUrl} alt="team banner" className="teamLogo" />
            <div className="match-container">
              <LatestMatch latestMatch={latestMatch} />
            </div>
            <div className="recent-match">
              {recentMatch.map(each => (
                <MatchCard key={each.id} matchCard={each} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
