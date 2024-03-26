import React from 'react';
import { data } from "../../../data/spotify";
import Image from 'next/image';
import { useRouter } from 'next/router'; 

const TrendingOnSpotify = () => {
    const router = useRouter(); 

    const handleImageClick = (item) => {
        router.push({
            pathname: '/listentomusic',
            query: { state: JSON.stringify({ item }) }, 
        });
    };

    return (
        <div className="px-6">
            <div className="flex flex-wrap -mx-1">
                {data.map((item) => (
                    <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-1">
                        <div className="bg-white p-4">
                            
                            <div className="relative" style={{ width: '200px', height: '200px', objectFit: 'contain', cursor: 'pointer' }} onClick={() => handleImageClick(item)}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className="rounded-lg"
                                    fill
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

export default TrendingOnSpotify;