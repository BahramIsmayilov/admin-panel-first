import React from 'react';
// import loadingLogo from '../img/loadingLogo.svg';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <div className="loading">
    <div className="container section pt-4">
      <div className="row">
        <ReactLoading
          className="mx-auto"
          type={type}
          color={color}
          height={'25%'}
          width={'25%'}
        />
      </div>
    </div>
  </div>
);

export default Loading;
