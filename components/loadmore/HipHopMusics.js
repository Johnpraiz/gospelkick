import React from 'react';
import { data } from "../../data/loadmoreGospel"; 
import Image from 'next/image';

const HipHopMusics = () => {
  return (
    <div className="px-6">
      <div className="flex flex-wrap -mx-1">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-1">
            <div className="bg-white p-4">
              <div className="relative" style={{ width: '200px', height: '200px' }}> 
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="p-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HipHopMusics;
