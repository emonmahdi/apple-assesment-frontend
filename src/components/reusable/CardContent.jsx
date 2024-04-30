/* eslint-disable react/prop-types */

import Button from "./Button";
import Button2 from "./Button2";

const CardContent = ({ title, subtitle, style }) => {
  return (
    <div className="content-card text-center py-8" style={style}>
      <h2 className="iphone-title">
        {title}
        {/* <span>
          {" "}
          {image && <img src={image} alt="Logo" className="logo w-auto" />}
        </span>{" "} */}
      </h2>
      <p className="iphone-subtitle mt-2">{subtitle}</p>
      <div className="mt-3">
        <Button>Learn More</Button>
        <Button2>Buy</Button2>
      </div>
    </div>
  );
};

export default CardContent;
