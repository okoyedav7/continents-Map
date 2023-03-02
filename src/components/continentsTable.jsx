import React from "react";

const ContinentsTable = ({ continents }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Continents</th>
          <th>Country</th>
          <th>population</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="table-body">
        {continents.map((c) => (
          <tr key={c.id}>
            <td>{c.continent}</td>
            <td>{c.countryName}</td>
            <td>{c.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContinentsTable;
