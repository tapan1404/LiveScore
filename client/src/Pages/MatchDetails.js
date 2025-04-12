import { useParams } from 'react-router-dom';

function MatchDetails() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Match Details for ID: {id}</h2>
      <p>Coming soon...</p>
    </div>
  );
}

export default MatchDetails;
