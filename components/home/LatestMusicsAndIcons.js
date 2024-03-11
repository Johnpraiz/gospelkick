import Image from 'next/image';

const LatestMusicsAndIcons = () => {
  return (
    <div className="bg-white text-black p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Latest musics on Gospelkick</h2>
      <div className="flex justify-around w-full pt-2">
        <div className="text-center">
          <div className="w-12 h-12 relative">
            <Image src="/audiomack.png" alt="Audiomack icon" width={48} height={48} />
          </div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 relative">
            <Image src="/apple-music-508x276.webp" alt="apple music icon" width={50} height={50} />
          </div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 relative">
            <Image src="/00.jpg" alt="Icon" width={48} height={48} />
          </div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 relative">
            <Image src="/boomplay_Music_Logo.png" alt="bamplay icon" width={48} height={48} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestMusicsAndIcons;

