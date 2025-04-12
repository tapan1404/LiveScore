import './MatchCard.css';

function MatchCard({ match }) {
  return (
    <div className="match-card">
      <h3>{match.name}</h3>
      <p><strong>Status:</strong> {match.status}</p>
      <p><strong>Teams:</strong> {match.teams?.join(" vs ")}</p>
      <p><strong>Score:</strong> {match.score?.map(s => `${s.inning} - ${s.runs}/${s.wickets} (${s.overs} ov)`).join(" | ")}</p>
    </div>
  );
}

export default MatchCard;
