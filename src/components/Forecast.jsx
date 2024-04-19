import React from "react";

const Forecast = ({ weather, timeConverter }) => {
  return (
    <div className="sm:hidden md:flex lg:flex flex-col justify-between p-10 sm:w-[17rem] sm:h-[22rem] md:w-[27rem] md:h-[22rem] lg:w-[22rem] lg:h-[27rem] bg-[#222831] rounded-r-[30px] space-y-3">
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
            {weather ? timeConverter(weather?.city?.sunrise)[1][1] : "-- AM"}
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
  );
};

export default Forecast;
