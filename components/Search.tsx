import React, { useEffect, useState } from "react";
import classes from "./Search.module.scss";
import { IBeer } from "../types";
import { useBeers } from "../hooks/useBeers";

type PropsType = {
  page: number;
  onChange: (newBeers: IBeer[]) => void;
};

export const Search: React.FC<PropsType> = ({ page, onChange }) => {
  const [searchText, setSearchText] = useState<string>("");
  const { beers, loading, error } = useBeers(page, searchText);

  useEffect(() => {
    onChange(beers);
  }, [onChange, beers]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={classes["search__container"]}>
      <input
        type="search"
        name="search"
        id="search"
        className={classes["search"]}
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};
