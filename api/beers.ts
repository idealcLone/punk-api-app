import axios from "axios";
import { IBeer } from "../types";
import { PAGE_SIZE } from "../consts/pagination";

const api = axios.create({
  baseURL: "https://api.punkapi.com/v2",
});

type ParamsType = {
  per_page: number;
  page: number;
  beer_name?: string;
};

type GetBeersType = {
  beerName?: string;
  page?: number;
};

export const getBeers = ({
  beerName,
  page = 1,
}: GetBeersType): Promise<IBeer[]> => {
  const params: ParamsType = { per_page: PAGE_SIZE, page };
  if (beerName) {
    params.beer_name = beerName;
  }

  return api.get("/beers", { params }).then((res) => res.data);
};

export const getBeer = (id: number): Promise<IBeer> => {
  return api.get(`/beers/${id}`).then((res) => res.data[0]);
};
