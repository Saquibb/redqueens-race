import React, { useLayoutEffect, useRef } from 'react';
import './App.css';

function App() {
  const background = useRef(null);
  useLayoutEffect(() => {
    //For Background
    var sceneryFrames = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ];

    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity,
    };

    var backgroundMovement = background.current.animate(
      sceneryFrames,
      sceneryTimingBackground
    );
    backgroundMovement.currentTime =
      backgroundMovement.effect.getTiming().duration / 2;

    var flyfaster = function () {
      backgroundMovement.playbackRate += 0.2;
    };
    document.addEventListener('click', flyfaster);
  });
  return (
    <div className='container'>
      <div className='earth'>
        <div className='alice'>
          <img
            className='redqueen_and_alice'
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png'
            alt=' '
          />
        </div>
      </div>
      <div className='scenary'>
        <img
          className='palm1'
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png'
          alt='palm1'
        />
      </div>
      <div className='background' ref={background}>
        <img
          className='ground'
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bg_earth.jpg'
          alt='earth'
        />

        <img
          className='bush'
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png'
          alt='bush'
        />
        <img
          className='rook_upright'
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png'
          alt='rook_upright'
        />
        <img
          className='r_knight'
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png'
          alt='r_knight'
        />
        <img
          className='palm2'
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png'
          alt='palm2'
        />
      </div>
    </div>
  );
}

export default App;
