import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  console.log(props);
  return <div>DetailPage{props.match.params.id}</div>;
};
