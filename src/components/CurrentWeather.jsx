import React from "react";

const CurrentWeather = ({ weather, timeConverter, handleAddZone }) => {
  return (
    <div className="flex flex-col justify-between p-10 sm:w-[15rem] sm:h-[25rem] md:w-[15rem] md:h-[25rem] lg:w-[20rem] lg:h-[30rem] rounded-[30px] bg-gradient-to-r from-[#90D9E0] to-[#5460E6]">
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
      <button
        type="button"
        onClick={handleAddZone(
          weather?.city?.name,
          timeConverter(weather?.list?.[0]?.dt)[0],
          Math.round(weather?.list?.[0]?.main.temp - 273.15)
        )}
      >
        add
      </button>
    </div>
  );
};

export default CurrentWeather;
