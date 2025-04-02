import React from 'react';
import './../App.css';

const LoadingScreen = ({ onEnterClick, isModelLoaded }) => {
  return (
    <div className="loading-screen">
      {isModelLoaded ? (
        <div>
          <p>Click the desk to get started.</p>
          <button className="enter-button" onClick={onEnterClick}>
            OK
          </button>
        </div>
      ) : (
        <div className="spinner">
          <div className="loading-text">Loading...</div>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
