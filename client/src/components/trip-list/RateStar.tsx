import * as React from "react";
import { Icon } from "antd";

interface IRateStarProps {
  numberOfStars: number;
  starType: string;
  starColor: string;
}

const RateStar: React.FunctionComponent<IRateStarProps> = props => {
  return (
    <div className="rate-star">
      {Array(props.numberOfStars).fill(
        <Icon type={props.starType} style={{ color: props.starColor }} />
      )}
    </div>
  );
};

export default RateStar;
