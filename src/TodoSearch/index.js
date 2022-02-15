import React from "react";
import "./todoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
 
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (

    <input
      onChange={onSearchValueChange}
      className="todoSearch"
      placeholder="Desarrollo"
      value={searchValue}
    />
  
  );
}

export { TodoSearch };
