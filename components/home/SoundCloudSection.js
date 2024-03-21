import React from 'react'
import Image from 'next/image';

const SoundcloudSection = () => {
    return (
      <div className="bg-white py-4 flex flex-col items-center justify-center rounded border mt-6 mr-2 ml-2">
     <Image
        src="/cloud.png"
        alt="Soundcloud icon"
        width={300}
        height={150}
        className="mb-4"
      />
        <h1 className="text-4xl text-center mb-4 rounded border w-full" style={{ width: 'calc(100% - 22px)' }}>
          Make Money with Soundcloud
        </h1>
        <p className="text-lg text-center mb-8">
          Let&apos; distribute your music on Soundcloud for easy monetization.
        </p>
        <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    );
  };
  
  export default SoundcloudSection;
  