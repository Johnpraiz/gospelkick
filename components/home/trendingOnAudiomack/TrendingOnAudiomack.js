import React from 'react';
import { data } from "../../../data/audiomack";
import Image from 'next/image';

const TrendingOnAudiomack = () => {
    return (
        <div className="px-6">
          <div className="flex flex-wrap -mx-1">
            {data.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-1">
                <div className="bg-white p-4">
                  <div className="relative" style={{ width: '200px', height: '200px', objectFit: 'contain' }}> 
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
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

export default TrendingOnAudiomack;



// import React, { useState } from 'react';
// import { data } from "../../../data/audiomack";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'
// import ListenToMusic from '../../listentomusic/ListenToGospel'; // Import the ListenToMusic component

// const TrendingOnAudiomack = () => {
//     const [selectedItem, setSelectedItem] = useState(null);
//     const router = useRouter();

//     const handleImageClick = (item) => {
//         setSelectedItem(item);
//         router.push('/listentogospelmusic');
//     };

//     return (
//         <div className="px-6">
//             <div className="flex flex-wrap -mx-1">
//                 {data.map((item, index) => (
//                     <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-1">
//                         <div className="bg-white p-4">
//                             <div className="relative" style={{ width: '200px', height: '200px', objectFit: 'contain' }}>
//                                 <Image
//                                     src={item.src}
//                                     alt={item.alt}
//                                     fill
//                                     className="rounded-lg cursor-pointer"
//                                     onClick={() => handleImageClick(item)}
//                                 />
//                             </div>
//                             <div className="p-2">
//                                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                                 <p className="text-sm text-gray-600">{item.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {selectedItem && <ListenToMusic selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
//         </div>
//     );
// };

// export default TrendingOnAudiomack;



// import React, { useState } from 'react';
// import { data } from "../../../data/audiomack";
// import Image from 'next/image';
// import { useRouter } from 'next/router'; // Correct import statement for useRouter

// import ListenToMusic from '../../listentomusic/ListenToGospel';

// const TrendingOnAudiomack = () => {
//     const [selectedItem, setSelectedItem] = useState(null);
//     const router = useRouter();

//     const handleImageClick = (item) => {
//         setSelectedItem(item);
//         router.push('/listentogospelmusic');
//     };

//     return (
//         <div className="px-6">
//             <div className="flex flex-wrap -mx-1">
//                 {data.map((item, index) => (
//                     <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-1">
//                         <div className="bg-white p-4">
//                             <div className="relative" style={{ width: '200px', height: '200px', objectFit: 'contain' }}>
//                                 <Image
//                                     src={item.src}
//                                     alt={item.alt}
//                                     width={200} // Added width and height props
//                                     height={200} // Added width and height props
//                                     onClick={() => handleImageClick(item)} // Pass the item object to the click handler
//                                     className="rounded-lg cursor-pointer"
//                                 />
//                             </div>
//                             <div className="p-2">
//                                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                                 <p className="text-sm text-gray-600">{item.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {selectedItem && <ListenToMusic selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} 
//         </div>
//     );
// };

// export default TrendingOnAudiomack;

