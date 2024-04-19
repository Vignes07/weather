import React from "react";

const Dash = ({ weather }) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center justify-around h-[8rem] w-[8rem] bg-gradient-to-r from-[#90D9E0] to-[#5460E6] rounded-[30px]">
        {weather ? (
          <>
            <img
              src={`http://openweathermap.org/img/w/${weather.list?.[7]?.weather[0].icon}.png`}
              alt="weather"
            />
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
      <div className="flex flex-col items-center justify-around h-[8rem] w-[8rem] bg-gradient-to-r from-[#90D9E0] to-[#5460E6] rounded-[30px]">
        {weather ? (
          <>
            <img
              src={`http://openweathermap.org/img/w/${weather.list?.[7]?.weather[0].icon}.png`}
              alt="weather"
            />
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
      <div className="flex flex-col items-center justify-around h-[8rem] w-[8rem] bg-gradient-to-r from-[#90D9E0] to-[#5460E6] rounded-[30px]">
        {weather ? (
          <>
            <img
              src={`http://openweathermap.org/img/w/${weather.list?.[7]?.weather[0].icon}.png`}
              alt="weather"
            />
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
      <div className="flex flex-col items-center justify-around h-[8rem] w-[8rem] bg-gradient-to-r from-[#90D9E0] to-[#5460E6] rounded-[30px]">
        {weather ? (
          <>
            <img
              src={`http://openweathermap.org/img/w/${weather.list?.[7]?.weather[0].icon}.png`}
              alt="weather"
            />
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
    </div>
  );
};

export default Dash;
