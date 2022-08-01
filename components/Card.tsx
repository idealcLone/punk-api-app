import React from "react";
import { IBeer } from "../types";
import classes from "./Card.module.scss";
import { useRouter } from "next/router";

type PropsType = {
  beer: IBeer;
};

export const Card: React.FC<PropsType> = ({ beer }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${beer.id}`);
  };

  return (
    <div className={classes["card"]} onClick={handleCardClick}>
      <img
        className={classes["card__img"]}
        src={beer.image_url}
        alt={beer.name}
      />
      <div className={classes["card__name"]}>{beer.name}</div>
      <p className={classes["card__description"]}>
        {beer.description.slice(0, 140)}{" "}
        {beer.description.length > 140 && "..."}
      </p>
    </div>
  );
};
