import React from 'react';
import ListenToGospel from '@/components/listentomusic/ListenToGospel';
import GoBackText from "../../components/loadmore/GoBackText"
import Navbar from '@/components/loadmore/Navbar';

const ListenToMusic = () => {
    return (<>
         <Navbar/>
       <ListenToGospel/>
         <GoBackText/>
    </>)
}

export default ListenToMusic