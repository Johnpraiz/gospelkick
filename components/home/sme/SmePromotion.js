import React from 'react';
import Image from 'next/image'; 
import { data } from '../../../data/smeData';

const Card = ({ alt, src, name, followers, likes, comments, views, stream, buy, index }) => {
  let width = 300; 
  let height = 200;

  if (index === 2 || index === 4) {
    height = 150; 
  }

  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 flex`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
        <div className="p-2"> 
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{name}</h3>
          {followers && <p>{followers}</p>}
          {likes && <p>{likes}</p>}
          {comments && <p>{comments}</p>}
          {views && <p>{views}</p>}
          {stream && <p>{stream}</p>}
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">{buy}</button>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="bg-white pr-4 pl-4 pb-4">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-wrap bg-black -mx-4">
          {data.map((item, index) => (
            <Card key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;

