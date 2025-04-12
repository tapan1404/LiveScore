import { useEffect, useState } from 'react';
import axios from 'axios';
import MatchCard from '../Components/MatchCard';

function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get(`https://api.cricapi.com/v1/currentMatches`, {
          params: {
            apikey: process.env.REACT_APP_CRIC_API_KEY
          }
        });
        setMatches(res.data.data);
      } catch (err) {
        console.error("Error fetching matches:", err);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="home">
      <h2 style={{ textAlign: 'center' }}>Live & Recent Matches</h2>
      <div className="match-list">
        {matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
}

export default Home;
