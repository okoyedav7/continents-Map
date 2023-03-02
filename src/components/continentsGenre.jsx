import React from "react";
const ContinentsGenre = ({ genre, genreSelect, selectGenre }) => {
  return (
    <ul className="list-group">
      {genre.map((c) => (
        <li
          key={c.id}
          onClick={() => genreSelect(c)}
          className={
            c === selectGenre ? "list-group-item active" : "list-group-item"
          }
        >
          {c.name}
        </li>
      ))}
    </ul>
  );
};

export default ContinentsGenre;
