import React, { useState } from "react";
import getContinents from "./components/continents";
import ContinentsTable from "./components/continentsTable";
import { getGenres } from "./components/continentsSelect";
import ContinentsGenre from "./components/continentsGenre";
import Pagination from "./components/pagination";
import { paginate } from "./components/utils/paginate";
import images from "./components/images/World.png";
import images1 from "./components/images/Asia.png";
import images2 from "./components/images/africa.png";
import images3 from "./components/images/Australia.png";
import images4 from "./components/images/Europe.png";
import images5 from "./components/images/north_america.png";
import images6 from "./components/images/south_america.png";

import _ from "lodash";

import "./App.css";

function App() {
  const [continents, setContinents] = useState(getContinents());
  const [genre, setGenre] = useState([
    { id: "", name: "All Continents" },
    ...getGenres(),
  ]);
  const [pageSize, setPageSize] = useState(10);
  const [image, setImage] = useState(images);
  const [selectGenre, setGenreSelect] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageChange = (page) => {
    setCurrentPage(page);
  };

  const filter =
    selectGenre && selectGenre.id
      ? continents.filter((m) => m.genre.id === selectGenre.id)
      : continents;

  const continent = paginate(filter, currentPage, pageSize);

  const handleGenreSelect = (genre) => {
    setGenreSelect(genre);
    setCurrentPage(1);
    console.log(genre.name);
    genre.name === "Asia"
      ? setImage(images1)
      : genre.name === "Africa"
      ? setImage(images2)
      : genre.name === "Australia"
      ? setImage(images3)
      : genre.name === "Europe"
      ? setImage(images4)
      : genre.name === "North America"
      ? setImage(images5)
      : genre.name === "South America"
      ? setImage(images6)
      : setImage(images);
  };
  return (
    <div className="App">
      <div className="row">
        <div className="col-3">
          <ContinentsGenre
            genre={genre}
            selectGenre={selectGenre}
            genreSelect={handleGenreSelect}
          />
        </div>
        <div
          className="col-9"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ContinentsTable continents={continent} />
          <Pagination
            pageSize={pageSize}
            continentsCount={filter.length}
            pageChange={pageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
