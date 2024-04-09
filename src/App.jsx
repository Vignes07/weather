import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("");

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${
      location ? location : "chennai"
    }&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
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

  return (
    <div className="m-0 h-svh bg-[#343d4b] flex flex-col gap-10 justify-center items-center font-Outfit text-white">
      <div className="flex gap-2">
        {/* <label
            for="location"
            class="block text-2xl font-medium text-white self-end"
          >
            {" "}
            Location{" "}
          </label> */}

        <input
          type="name"
          placeholder="Location"
          className="mt-1 px-2 h-8 rounded-md bg-[#272e37] outline-none self-end"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col justify-between p-10 sm:w-[15rem] sm:h-[25rem] md:w-[15rem] md:h-[25rem] lg:w-[25rem] lg:h-[35rem] rounded-[30px] bg-gradient-to-r from-[#90D9E0] to-[#5460E6]">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-3xl">
              {timeConverter(weather?.list?.[0]?.dt)[0]}
            </span>
            <span className="font-normal text-lg">
              {timeConverter(weather?.list?.[0]?.dt)[1][0]}
            </span>
            <span className="location flex align-middle gap-1">
              <span className="icon-[bi--geo-alt-fill] w-5 h-5 self-center"></span>
              <span>{weather ? weather.city?.name : "--"}</span>
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {weather ? (
              <>
                <img
                  src={`http://openweathermap.org/img/w/${weather.list?.[0]?.weather[0].icon}.png`}
                  alt="weather"
                  className="w-20 h-20 -translate-x-2"
                />
                <span className="font-bold text-4xl">
                  {Math.round(weather.list?.[0]?.main.temp - 273.15)}&deg;C
                </span>
                <span className="font-semibold text-3xl">
                  {weather.list?.[0]?.weather[0].main}
                </span>
              </>
            ) : (
              <>
                <span className="font-bold text-4xl">--&deg;C</span>
                <span className="font-semibold text-3xl">--</span>
              </>
            )}
          </div>
        </div>
        <div className="sm:hidden md:flex lg:flex flex-col justify-between p-10 sm:w-[17rem] sm:h-[22rem] md:w-[27rem] md:h-[22rem] lg:w-[27rem] lg:h-[32rem] bg-[#222831] rounded-r-[30px] space-y-3">
          <div>
            <div className="flex justify-between font-medium text-2xl">
              <span>FEELS LIKE</span>
              <span>
                {weather
                  ? Math.round(weather.list?.[0]?.main.feels_like - 273.15)
                  : "--"}
                &nbsp;&deg;C
              </span>
            </div>
            <div className="flex justify-between font-medium text-2xl">
              <span>HUMIDITY</span>
              <span>
                {weather ? Math.round(weather.list?.[0]?.main.humidity) : "--"}
                &nbsp;%
              </span>
            </div>
            <div className="flex justify-between font-medium text-2xl">
              <span>WIND</span>
              <span>
                {weather ? weather.list?.[0]?.wind.speed : "--"}&nbsp;km/h
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[1px] text-white">
            <div className="flex flex-col items-center justify-around h-[8rem] w-[6.5rem] bg-[#272e37] rounded-lg">
              {weather ? (
                <>
                  <img
                    src={`http://openweathermap.org/img/w/${weather.list?.[7]?.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <span className="font-semibold text-xl">
                    {timeConverter(weather.list?.[7]?.dt)[0]?.substring(0, 3)}
                  </span>
                  <span className="font-bold text-2xl">
                    {Math.round(weather.list?.[7]?.main.feels_like - 273.15)}
                    &deg;C
                  </span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-xl">--</span>
                  <span className="font-bold text-2xl">--&nbsp;&deg;C</span>
                </>
              )}
            </div>
            <div className="flex flex-col items-center justify-around h-[8rem] w-[6.5rem] bg-[#272e37] rounded-lg">
              {weather ? (
                <>
                  <img
                    src={`http://openweathermap.org/img/w/${weather.list?.[8]?.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <span className="font-semibold text-xl">
                    {timeConverter(weather.list?.[8]?.dt)[0]?.substring(0, 3)}
                  </span>
                  <span className="font-bold text-2xl">
                    {Math.round(weather.list?.[8]?.main.feels_like - 273.15)}
                    &deg;C
                  </span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-xl">--</span>
                  <span className="font-bold text-2xl">--&nbsp;&deg;C</span>
                </>
              )}
            </div>
            <div className="flex flex-col items-center justify-around h-[8rem] w-[6.5rem] bg-[#272e37] rounded-lg">
              {weather ? (
                <>
                  <img
                    src={`http://openweathermap.org/img/w/${weather.list?.[16]?.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <span className="font-semibold text-xl">
                    {timeConverter(weather.list?.[16]?.dt)[0]?.substring(0, 3)}
                  </span>
                  <span className="font-bold text-2xl">
                    {Math.round(weather.list?.[16]?.main.feels_like - 273.15)}
                    &deg;C
                  </span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-xl">--</span>
                  <span className="font-bold text-2xl">--&nbsp;&deg;C</span>
                </>
              )}
            </div>
            <div className="flex flex-col items-center justify-around h-[8rem] w-[6.5rem] bg-[#272e37] rounded-lg">
              {weather ? (
                <>
                  <img
                    src={`http://openweathermap.org/img/w/${weather.list?.[24]?.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <span className="font-semibold text-xl">
                    {timeConverter(weather.list?.[24]?.dt)[0]?.substring(0, 3)}
                  </span>
                  <span className="font-bold text-2xl">
                    {Math.round(weather.list?.[24]?.main.feels_like - 273.15)}
                    &deg;C
                  </span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-xl">--</span>
                  <span className="font-bold text-2xl">--&nbsp;&deg;C</span>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="icon-[bi--sunrise] w-5 h-5"></span>
              <span className="text-md">
                Sunset{" "}
                {weather
                  ? timeConverter(weather?.city?.sunrise)[1][1]
                  : "-- AM"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="icon-[bi--sunset] w-5 h-5"></span>
              <span className="text-md">
                Sunset{" "}
                {weather ? timeConverter(weather?.city?.sunset)[1][1] : "-- PM"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
