import React from "react";
import classes from "./Tag.module.scss";
import classNames from "classnames";

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

export const Tag: React.FC<PropsType> = ({ children, className }) => {
  return (
    <div className={classNames(classes["tag"], className)}>{children}</div>
  );
};
