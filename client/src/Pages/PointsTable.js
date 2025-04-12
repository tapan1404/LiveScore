import React from 'react';
import pointsTableData from '../data/pointsData';
import './PointsTable.css';

const PointsTable = () => {
  return (
    <div className="table-container">
      <h1 className="table-heading">IPL 2025 Points Table</h1>
      <div className="table-wrapper">
        <table className="points-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {pointsTableData.map((team, index) => (
              <tr key={index}>
                <td>{team.team}</td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td><strong>{team.points}</strong></td>
                <td>{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
