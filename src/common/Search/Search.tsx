import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Search.scss";

function Search() {
  return (
    <>
      <div className="search">
        <Input />
        <Button title="Search" onClick={() => alert('search')} />
      </div>
    </>
  );
}

export default Search;
