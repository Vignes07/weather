import React from "react";

const Search = ({ status, location, setLocation, searchLocation }) => {
  return (
    <div className="flex flex-col">
      {/* <label
      for="location"
      class="block text-2xl font-medium text-white self-end"
    >
      {" "}
      Location{" "}
    </label> */}

      {status === 404 ? (
        <span className="absolute top-36 float-right self-end text-sm text-red-500">
          Not found *
        </span>
      ) : status === 200 ? (
        ""
      ) : null}

      <input
        type="name"
        placeholder="Location"
        className="mt-1 px-2 h-8 rounded-md bg-[#272e37] outline-none self-end"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchLocation}
      />
    </div>
  );
};

export default Search;
