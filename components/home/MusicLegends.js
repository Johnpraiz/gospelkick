import React from 'react'
import { data } from "../../data/musiclegends"
import Image from 'next/image';


const MusicLegends = () => {
    return (

        <div className='flex flex-col items-center mt-10'>
            <h1 className='text-black text-center text-4xl font-bold'>Music Legend</h1>
      <div className="flex justify-center space-x-12 mt-1">
        
        {data.map((artist, index) => (
          <div key={index} className="max-w-sm overflow-hidden shadow-lg border rounded p-1">
            <Image className="w-full" src={artist.src} alt={artist.alt} width={400} height={300} objectFit= "contain"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{artist.name}</div>
              <p className="text-gray-700 text-base">{artist.description}</p>
            </div>
          </div>
        ))}

       
        
      </div>
      </div>
    );
  };
  
  export default MusicLegends;