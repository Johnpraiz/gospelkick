import React from "react";
import Navbar from "../../components/loadmore/Navbar"
import GospelText from '../../components/loadmore/GospelText'
import GospelMusics from "../../components/loadmore/GospelMusics"
import AfroBeatText from '../../components/loadmore/AfroBeatText'
import AfroBeatMusic from '../../components/loadmore/AfroBeatMusic'
import HipHopMusic from '../../components/loadmore/HipHopMusics'
import HipHopText from '../../components/loadmore/HipHopText'
import GoBackText from "@/components/loadmore/GoBackText";

const LoadMorePage = () => {
    return (<>
          <Navbar/>
            <GospelText/>
              <GospelMusics/>
              <AfroBeatText/>
            <AfroBeatMusic/>
          <HipHopText/>
        <HipHopMusic/>
       <GoBackText/>
    </>)
}

export default LoadMorePage

