import React, { Fragment } from "react";
import zalo from "./zalo.jpg";
const PopUpZalo = () => {
  return (
    <Fragment>
      <div className="popup-container">
        <div className="popup-zalo">
          <img
            className="object-cover w-[400px] h-[400px]"
            src={zalo}
            alt="zalo"
          />
          <p>Quét mã zalo trên</p>
        </div>
      </div>
    </Fragment>
  );
};

export default PopUpZalo;
