import Slider from "../../components/slider/Slider";
import Navbar from "@/components/navbar/Navbar";
import UserIconAndUser from "../../components/home/usericonanduser/UserIconAndUser"
import GreyBackground from "../../components/home/GrayBackground"
import WelcomeMessage from "@/components/home/WelcomeMessage";
import LatestMusicsAndIcons from "../../components/home/LatestMusicsAndIcons"
import TrendingOnAudiomackText from "../../components/home/trendingOnAudiomack/TrendingOnAudiomackText"
import TrendingOnAudiomack from "../../components/home/trendingOnAudiomack/TrendingOnAudiomack"

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
    </>;
  }
