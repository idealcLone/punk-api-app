import { useCallback, useEffect, useState } from "react";
import { IBeer } from "../types";
import { getBeers } from "../api/beers";

export const useBeers = (page: number, searchText: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [beers, setBeers] = useState<IBeer[]>([]);

  const fetchBeers = useCallback(() => {
    setLoading(true);
    getBeers({ page, beerName: searchText })
      .then((data: IBeer[]) => setBeers(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [searchText, page]);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  return { beers, loading, error };
};
