import React from 'react';
import { data} from "../../../data/audiomack"

const TrendingOnAudiomack = () => {
    return (
      <div className="px-6 ">
        <div className="flex flex-wrap -mx-1 mb-4"> {/* Adjusted negative margin */}
          {data.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6  mb-2"> {/* Adjusted padding and margin */}
              <div className="bg-white p-4">
                <img src={item.src} alt={item.alt} className="w-full" />
                <div className="p-2"> {/* Added padding */}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TrendingOnAudiomack;
