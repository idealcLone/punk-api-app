import { NextPage } from "next";
import { useRouter } from "next/router";
import { getBeer } from "../api/beers";
import { useCallback, useEffect, useState } from "react";
import { IBeer } from "../types";
import classes from "../styles/Beer.module.scss";
import { Tag } from "../components/Tag";

const Beer: NextPage = () => {
  const router = useRouter();

  const [beer, setBeer] = useState<IBeer>({
    abv: "",
    description: "",
    food_pairing: [],
    id: 0,
    image_url: "",
    name: "",
    tagline: "",
  });

  const { id } = router.query;

  const fetchBeer = useCallback(() => {
    id &&
      getBeer(+id)
        .then((data) => setBeer(data))
        .catch((err) => console.log(err));
  }, [id]);

  console.log(beer);

  useEffect(() => {
    fetchBeer();
  }, [fetchBeer]);

  return (
    <div className={classes["beer"]}>
      <div className={classes["beer__img-wrapper"]}>
        <img
          src={beer.image_url}
          alt={beer.name}
          className={classes["beer__img"]}
        />
      </div>
      <div className={classes["beer__info"]}>
        <div className={classes["beer__heading"]}>
          <h2 className={classes["beer__name"]}>{beer.name}</h2>
          <Tag className={classes["beer__tagline"]}>{beer.tagline}</Tag>
        </div>
        <p className={classes["beer__description"]}>{beer.description}</p>
        <ul className={classes["beer__foods"]}>
          <h3 className={classes["beer__list-title"]}>Food pairings:</h3>
          {beer.food_pairing.map((food) => (
            <li key={food}>{food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Beer;
