import React from 'react';
import ListenToMusic from '@/components/listentomusic/listentomusic';
import GoBackText from "../../components/loadmore/GoBackText"
import Navbar from '@/components/loadmore/Navbar';

const Music = () => {
    return (<>
         <Navbar/>
       <ListenToMusic/>
         <GoBackText/>
    </>)
}

export default Music