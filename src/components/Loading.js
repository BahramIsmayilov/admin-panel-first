import React from 'react';
// import loadingLogo from '../img/loadingLogo.svg';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <div className="container-fluid loading">
    <div className="row">
      <ReactLoading
        className="mx-auto loading-logo"
        type={type}
        color={color}
        height={'20%'}
        width={'20%'}
      />
    </div>
  </div>
);

export default Loading;
