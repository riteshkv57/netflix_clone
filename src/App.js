import requests from "./components/request";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import "./assets/css/App.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Banner />
      <header className="App-header">
        <Row num={1} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />
        <Row num={2} title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row num={3} title="TopRated Movies" fetchUrl={requests.fetchTopRated} />
        <Row num={4} title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
        <Row num={5} title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
        <Row num={6} title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
        <Row num={7} title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
        <Row num={8} title="Western Movies" fetchUrl={requests.fetchWestern} />
        <Row num={9} title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      </header>
    </div>
  );
}

export default App;
