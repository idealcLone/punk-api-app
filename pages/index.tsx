import classes from "../styles/Home.module.scss";
import { NextPage } from "next";
import { Search } from "../components/Search";
import { useCallback, useState } from "react";
import { IBeer } from "../types";
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";

const Home: NextPage = () => {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = useCallback((newBeers: IBeer[]) => {
    setBeers(newBeers);
  }, []);

  return (
    <div className={classes["home"]}>
      <Search page={page} onChange={handleSearchChange} />
      <ul className={classes["beers"]}>
        {beers.map((beer) => (
          <li key={beer.id}>
            <Card beer={beer} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        onChange={handlePageChange}
        dataSize={beers.length}
      />
    </div>
  );
};

export default Home;
