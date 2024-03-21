import React from 'react';
import Image from 'next/image';

const DiscoverNewMusic = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 p-4 rounded-lg shadow-md items-center mr-4 ml-4">
      <div className="md:w-1/2" style={{ height: 'auto', maxHeight: '300px' }}>
        <Image src="/What_is_ad_tracking-Thumb.jpg" alt="Music Image" width={400} height={300} />
      </div>
      <div className="md:w-1/2 bg-gray-200 p-4 text-center md:text-left" style={{ width: '100%' }}>
        <h1 className="text-black text-xl md:max-w-2xl mx-auto"> {/* Adjusted max-w-2xl class and added mx-auto for centering */}
          Discover new music in Africa and beyond. We have different playlists that will shape your mood in a positive way. With just a click,
          you can listen to music on any streaming platform. Starting from Apple Music, Spotify, Boomplay, Audiomack, and the rest.
        </h1>
      </div>
    </div>
  );
};

export default DiscoverNewMusic;


