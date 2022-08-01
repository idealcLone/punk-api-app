import React from "react";
import classes from "./Pagination.module.scss";
import { PAGE_SIZE } from "../consts/pagination";

type PropsType = {
  currentPage: number;
  onChange: (newPage: number) => void;
  dataSize: number;
};

export const Pagination: React.FC<PropsType> = ({
  currentPage,
  onChange,
  dataSize,
}) => {
  return dataSize ? (
    <div className={classes["pagination"]}>
      {currentPage > 1 && (
        <img
          src="./left-arrow.svg"
          alt="Left arrow"
          onClick={() => onChange(currentPage - 1)}
        />
      )}
      {currentPage}
      {dataSize === PAGE_SIZE && (
        <img
          src="./right-arrow.svg"
          alt="Right arrow"
          onClick={() => onChange(currentPage + 1)}
        />
      )}
    </div>
  ) : (
    <></>
  );
};
