import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ListenToMusic = () => {
    const router = useRouter();
    const { state } = router.query;
    const { item } = state ? JSON.parse(state) : {};

    if (!item) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="bg-blue-gray-300 rounded-lg flex items-center p-4">
            <div className="flex items-start w-1/2 ml-10 bg-darkGray p-4">
                <div className="w-40 h-24 mr-4 flex-shrink-0">
                    <Image
                        src={item?.src || ''}
                        alt={item?.alt || ''}
                        layout="responsive"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold">{item?.title || ''}</h1>
                    <iframe
                        src={item?.url || ''}
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="mt-4"
                    ></iframe>
                    <p className="mt-8">
                        <a href={item?.externalUrl || ''} target="_blank" rel="noopener noreferrer">
                            <span className='bg-customOrange p-2 mr-1 rounded hover:bg-black hover:text-white'>Stream</span>
                        </a>
                        Click on Stream to listen on Spotify app
                    </p>
                </div>
            </div>
            <div className='bg-white w-1/2 flex-shrink-0 ml-10 mr-10' style={{ height: '300px' }}></div>
        </div>
    );
};

export default ListenToMusic;



