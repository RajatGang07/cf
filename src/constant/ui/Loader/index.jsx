import React from 'react';
import "./index.scss";

const Loader = (props) => {
    return (
        <div className="content">
        <div className="animatedBG card">
          <div className="mask topMask"></div>
          <div className="mask bottomMask"></div>
          <div className="mask leftMask"></div>
          <div className="mask rightMask"></div>
          <div className="mask horizontalLineMask1"></div>
          <div className="mask horizontalLineMask2"></div>
          <div className="mask verticalGapMask"></div>
          <div className="mask leftBlock2PaddingMask"></div>
          <div className="mask leftBlock3PaddingMask"></div>
          <div className="mask rightBlock1PaddingMask"></div>
          <div className="mask rightBlock3PaddingMask"></div>
        </div>
      </div>


    )
};


export default (Loader);
