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
import TrendingOnBoomplayText from "@/components/home/trendingOnBoomplay/TrendingOnBoomplayText";
import TrendingOnBoomplay from "../../components/home/trendingOnBoomplay/TrendingOnBoomplay"
import LoadMoreButton from "@/components/home/LoadMore";
import DiscoverNewMusic from "../../components/home/DiscoverNewMusic"
import SMEService from "../../components/home/OurSmeService"

export default function Home() {
    return <>
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
                    <TrendingOnBoomplayText/>
                 <TrendingOnBoomplay/>
              <LoadMoreButton />
           <DiscoverNewMusic />
       <SMEService/>
    </>;
  }
