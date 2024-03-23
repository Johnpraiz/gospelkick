import Slider from "../../components/slider/Slider";
import Navbar from "@/components/navbar/Navbar";
import UserIconAndUser from "../../components/home/usericonanduser/UserIconAndUser"
import GreyBackground from "../../components/home/GrayBackground"
import WelcomeMessage from "@/components/home/WelcomeMessage";
import LatestMusicsAndIcons from "../../components/home/LatestMusicsAndIcons"
import TrendingOnAudiomackText from "../../components/home/trendingOnAudiomack/TrendingOnAudiomackText"
import TrendingOnAudiomack from "../../components/home/trendingOnAudiomack/TrendingOnAudiomack"
import TrendingOnSpotifyText from "../../components/home/trendingOnSpotify/TrendingOnSpotifyText"
import TrendingOnSpotify from "../../components/home/trendingOnSpotify/TrendingOnSpotify"
// import TrendingOnBoomplayText from "@/components/home/trendingOnBoomplay/TrendingOnBoomplayText";
// import TrendingOnBoomplay from "../../components/home/trendingOnBoomplay/TrendingOnBoomplay"
import LoadMoreButton from "@/components/loadmore/LoadMore";
import DiscoverNewMusic from "../../components/home/DiscoverNewMusic"
import SMEService from "../../components/home/sme/OurSmeService"
import SmePromotion from "../../components/home/sme/SmePromotion"
import SoundcloudSection from "../../components/home/SoundCloudSection"
import MusicLegends from "../../components/home/MusicLegends"
import Features from "../../components/home/Features"
import Footer from "@/components/home/Footer";
import Header from '../../components/header/Header';


export default function Home() {
    return <>
    <Header/>
      <Navbar />
       < Slider />
          < UserIconAndUser />
            <GreyBackground />
              <WelcomeMessage />
               <LatestMusicsAndIcons />
                 <TrendingOnAudiomackText/>
                   <TrendingOnAudiomack/>
                     <TrendingOnSpotifyText/>
                       < TrendingOnSpotify/>
                         {/* <TrendingOnBoomplayText/>
                           <TrendingOnBoomplay/> */}
                        <LoadMoreButton />
                     <DiscoverNewMusic />
                   <SMEService/>
                 <SmePromotion/>
              <SoundcloudSection/>
          <MusicLegends/>
       <Features/>
    <Footer/>
       
 </>;
  }
