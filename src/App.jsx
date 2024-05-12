import { useState, useEffect } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
// import Dash from "./components/Dash";
import { useDispatch } from "react-redux";
import { addZone } from "./reducers/weatherReducer";

function App() {
  const dispatch = useDispatch();

  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const fetchData = async () => {
    const apiKey =
      import.meta.env.VITE_OPENWEATHER_API_KEY ||
      "856daf38df45297958368cada9a06396";

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${
      location ? location : "chennai"
    }&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        setStatus(response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
      setStatus(response.status);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setStatus("");
  }, []);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetchData();
      setLocation("");
    }
  };

  const timeConverter = (UNIX_timestamp) => {
    var a = UNIX_timestamp ? new Date(UNIX_timestamp * 1000) : new Date();
    var today = [];
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = a.getDay();
    var hour = a.getHours();
    var min = a.getMinutes();
    var AmOrPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    var time = [
      date + " " + month + " " + year,
      hour + ":" + min + " " + AmOrPm,
    ];
    today.push(days[day]);
    today.push(time);
    return today;
  };

  const handleAddZone = (location, day, temperature) => {
    dispatch(addZone(location, day, temperature));
  };

  return (
    <div className="m-0 h-svh bg-[#343d4b] flex flex-col gap-10 justify-center items-center font-Outfit text-white">
      <Search
        status={status}
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <div className="flex items-center">
        <CurrentWeather
          weather={weather}
          timeConverter={timeConverter}
          handleAddZone={handleAddZone}
        />
        <Forecast weather={weather} timeConverter={timeConverter} />
      </div>
      {/*<Dash weather={weather} timeConverter={timeConverter} />*/}
    </div>
  );
}

export default App;
