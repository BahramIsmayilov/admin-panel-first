import React from 'react';
import loadingLogo from '../img/loadingLogo.svg';

const Loading = () => {
  return (
    <div className="back-dark">
      <div className="container">
        <div className="row">
          <div className="mx-auto">
            <img src={loadingLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
