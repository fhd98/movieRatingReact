import React, { useEffect, useState } from "react";

const Movieslist = (props) => {
  useEffect(() => {
    setMovieName(localStorage.getItem("movieName"));
  }, []);
  const [movieName, setMovieName] = useState("");
  // var movieName = localStorage.getItem("movieName");

  //alert(movieName);

  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        <li
          className="flex slide-up-fade-in justify-content-between"
          style={{ borderBottom: "2px solid var(--primary-color)" }}
        >
          <div className="layout-column w-40">
            <h3 className="my-3">{props.movie}</h3>
            {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
            <p className="my-0"></p>
          </div>
          <div className="layout-row my-auto mr-20">
            {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
            <p className="justify-content-end"></p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Movieslist;
