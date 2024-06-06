import React from "react";
import Rows from "./Row";
import requests from "../requests";
import "./styles/App.css";
import NavBar from "./NavBar";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
