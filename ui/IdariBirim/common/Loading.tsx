import React from "react";

 export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-box">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};
