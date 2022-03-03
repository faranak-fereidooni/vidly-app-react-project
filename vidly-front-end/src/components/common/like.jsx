import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Like = (props) => {
  let classes = solidHeart;
  if (!props.liked) classes = regularHeart;
  return (
    <FontAwesomeIcon
      icon={classes}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
