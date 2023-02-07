import React from "react";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  const handelClick = () => {
    filterValue === "Russia" ? setFilter("") : setFilter("Russia");
    // alert("Header");
  };
  return (
    <span>
      {/* Search:{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      /> */}
      <button onClick={handelClick}>click button</button>
    </span>
  );
};
