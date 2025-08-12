import React, { useState, useEffect } from "react";
import "./MovieBooking.css";

export default function MovieBooking() {
  const movies = {
    WeatheringWithYou: {
      src: "/weathering.jpg",
      desc: "A beautiful animated movie about weather and love in Tokyo.",
      price: 200,
    },
    YourName: {
      src: "/name.png",
      desc: "Two teenagers mysteriously swap bodies in a story about fate and connection.",
      price: 220,
    },
    AOT: {
      src: "/aot.jpg",
      desc: "Humanity fights for survival behind walls in a world of Titans.",
      price: 220,
    },
    SoloLeveling: {
      src: "/solo.png",
      desc: "A weak hunter rises to become the strongest through a mysterious system.",
      price: 230,
    },
    Graveyard: {
      src: "/grave.jpg",
      desc: "A heartbreaking story of two siblings struggling to survive during WWII.",
      price: 200,
    },
  };

  const [selectedMovie, setSelectedMovie] = useState("YourName");
  const [ticketPrice, setTicketPrice] = useState(movies["YourName"].price);
  const [soldSeatsByMovie, setSoldSeatsByMovie] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Load stored data
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("soldSeatsByMovie")) || {};
    setSoldSeatsByMovie(storedData);
    loadSeatsForMovie("YourName", storedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadSeatsForMovie = (movieKey, data = soldSeatsByMovie) => {
    const movieData = data[movieKey] || { sold: [], selected: [] };
    setSelectedSeats(movieData.selected);
  };

  const handleSeatClick = (index) => {
    const movieData = soldSeatsByMovie[selectedMovie] || { sold: [], selected: [] };
    if (movieData.sold.includes(index)) return;

    const updatedSelected = selectedSeats.includes(index)
      ? selectedSeats.filter((i) => i !== index)
      : [...selectedSeats, index];

    setSelectedSeats(updatedSelected);

    setSoldSeatsByMovie({
      ...soldSeatsByMovie,
      [selectedMovie]: {
        ...movieData,
        selected: updatedSelected,
      },
    });
  };

  const handleSubmit = () => {
    const movieData = soldSeatsByMovie[selectedMovie] || { sold: [], selected: [] };
    const updatedSold = [...movieData.sold, ...selectedSeats];

    setSoldSeatsByMovie({
      ...soldSeatsByMovie,
      [selectedMovie]: {
        sold: updatedSold,
        selected: [],
      },
    });

    setSelectedSeats([]);
    localStorage.setItem("soldSeatsByMovie", JSON.stringify({
      ...soldSeatsByMovie,
      [selectedMovie]: {
        sold: updatedSold,
        selected: [],
      }
    }));
  };

  const handleMovieChange = (e) => {
    const movieKey = e.target.value;
    setSelectedMovie(movieKey);
    setTicketPrice(movies[movieKey].price);
    loadSeatsForMovie(movieKey);
  };

  return (
    <div className="booking-page">
      <div className="overlay"></div>
      <h1>BookYourShow</h1>

      <div className="movie-info">
        <img src={movies[selectedMovie].src} alt="Movie Poster" />
        <p>{movies[selectedMovie].desc}</p>
      </div>

      <div className="movie-container">
        <label>Select a movie:</label>
        <select value={selectedMovie} onChange={handleMovieChange}>
          {Object.keys(movies).map((key) => (
            <option key={key} value={key}>
              {key} (RS.{movies[key].price})
            </option>
          ))}
        </select>
      </div>

      <ul className="showcase">
        <li><div className="seat"></div><small>Available</small></li>
        <li><div className="seat selected"></div><small>Selected</small></li>
        <li><div className="seat sold"></div><small>Sold</small></li>
      </ul>

      <div className="container">
        <div className="screen"></div>
        {[...Array(2)].map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {[...Array(12)].map((_, seatIndex) => {
              const globalIndex = rowIndex * 12 + seatIndex;
              const isSold = soldSeatsByMovie[selectedMovie]?.sold?.includes(globalIndex);
              const isSelected = selectedSeats.includes(globalIndex);

              return (
                <div
                  key={seatIndex}
                  className={`seat ${isSold ? "sold" : ""} ${isSelected ? "selected" : ""}`}
                  onClick={() => handleSeatClick(globalIndex)}
                ></div>
              );
            })}
          </div>
        ))}
      </div>

      <p className="text">
        You have selected <span>{selectedSeats.length}</span> seat(s) for a price of RS.
        <span>{selectedSeats.length * ticketPrice}</span>
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
