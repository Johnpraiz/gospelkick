import React from 'react';
import Image from 'next/image';


const ListenToMusic = () => {
  return (
    <div className="bg-blue-gray-300 rounded-lg flex items-center p-4">
      <div className="flex items-start w-1/2 ml-10 bg-darkGray p-4"> 
        <div className="w-40 h-24 mr-4 flex-shrink-0">
          <Image
            src="/afrog.jpeg" 
            alt="Gospel Hip Hop"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">Gospel Hip Hop</h1>
          <iframe
            src="https://open.spotify.com/embed/playlist/1QeWsTfEf0KAgiQ5hfMsRi?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="mt-4"
          ></iframe>
          <p className="mt-8"><a href="https://open.spotify.com/playlist/1QeWsTfEf0KAgiQ5hfMsRi?si=d9bb47afe4804e13" target="_blank" rel="noopener noreferrer"><span className='bg-customOrange p-2 rounded hover:bg-black hover:text-white'>Stream</span></a>Click on Stream to listen on Spotify app </p>
        </div>
      </div>
      <div className='bg-white w-1/2 flex-shrink-0 ml-10 mr-10' style={{ height: '300px' }}></div> 
    </div>
  );
};

export default ListenToMusic;


// import React from 'react';
// import Image from 'next/image';

// const ListenToMusic = ({ selectedItem, setSelectedItem }) => {
//     const handleImageClick = (url) => {
//         window.open(url, '_blank');
//     };

//     const handleClose = () => {
//         setSelectedItem(null);
//     };

//     return (
//         <div className="bg-blue-gray-300 rounded-lg flex items-center p-4">
//             <div className="flex items-start w-1/2 ml-10 bg-darkGray p-4">
//                 <div className="w-40 h-24 mr-4 flex-shrink-0">
//                     <Image
//                         src={selectedItem.src}
//                         alt={selectedItem.alt}
//                         layout="responsive"
//                         width={200}
//                         height={200}
//                         onClick={() => handleImageClick(selectedItem.externalUrl)}
//                         className="cursor-pointer"
//                     />
//                 </div>
//                 <div className="flex-grow">
//                     <h1 className="text-2xl font-bold">{selectedItem.title}</h1>
//                     <iframe
//                         src={selectedItem.url}
//                         width="100%"
//                         height="352"
//                         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                         allowFullScreen
//                         loading="lazy"
//                         className="mt-4"
//                     ></iframe>
//                     <p className="mt-8">
//                         <a href={selectedItem.externalUrl} target="_blank" rel="noopener noreferrer">
//                             <span className="bg-customOrange p-2 rounded hover:bg-black hover:text-white">Stream</span>
//                         </a>
//                         Click on Stream to listen on Spotify app
//                     </p>
//                 </div>
//             </div>
//             <div className="bg-white w-1/2 flex-shrink-0 ml-10 mr-10" style={{ height: '300px' }}>
//                 <button onClick={handleClose} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ListenToMusic;



// import React from 'react';
// import Image from 'next/image';

// const ListenToMusic = ({ selectedItem, setSelectedItem }) => {
//     const handleImageClick = (url) => {
//         window.open(url, '_blank');
//     };

//     const handleClose = () => {
//         setSelectedItem(null);
//     };

//     return (
//         <div className="bg-blue-gray-300 rounded-lg flex items-center p-4">
//             <div className="flex items-start w-1/2 ml-10 bg-darkGray p-4">
//                 <div className="w-40 h-24 mr-4 flex-shrink-0">
//                     <Image
//                         src={selectedItem.src}
//                         alt={selectedItem.alt}
//                         layout="responsive"
//                         width={200}
//                         height={200}
//                         onClick={() => handleImageClick(selectedItem.externalUrl)}
//                         className="cursor-pointer"
//                     />
//                 </div>
//                 <div className="flex-grow">
//                     <h1 className="text-2xl font-bold">{selectedItem.title}</h1>
//                     <iframe
//                         src={selectedItem.url}
//                         width="100%"
//                         height="352"
//                         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                         allowFullScreen
//                         loading="lazy"
//                         className="mt-4"
//                     ></iframe>
//                     <p className="mt-8">
//                         <a href={selectedItem.externalUrl} target="_blank" rel="noopener noreferrer">
//                             <span className="bg-customOrange p-2 rounded hover:bg-black hover:text-white">Stream</span>
//                         </a>
//                         Click on Stream to listen on Spotify app
//                     </p>
//                 </div>
//             </div>
//             <div className="bg-white w-1/2 flex-shrink-0 ml-10 mr-10" style={{ height: '300px' }}>
//                 <button onClick={handleClose} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ListenToMusic;
