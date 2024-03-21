import React from 'react';

const MusicPlayer = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="mr-4 md:mr-8 py-4"> 
        <h1 className="text-2xl font-bold mb-1">Listen On Audiomack</h1>
        <p className="text-xl mb-2">Click on Audiomack to listen</p>
        <button className="bg-customOrange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2">
          Audiomack
        </button>
      </div>
      <div className='ml-4 md:ml-8 py-4'> 
        <h1 className="text-2xl font-bold mb-1">Listen On Spotify</h1>
        <p className="text-xl mb-2">Click on Spotify to listen</p>
        <button className="bg-customOrange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2">
          Spotify
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
