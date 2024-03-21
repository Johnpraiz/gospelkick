import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 ml-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Column 1: SERVICE */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">SERVICE</h3>
          <ul>
            <li>Music promotion</li>
            <li>Music distribution</li>
            <li>Graphic design</li>
            <li>Web design</li>
            <li>Artist management</li>
            <li>Playlist Placement</li>
            <li>Submit Playlist</li>
          </ul>
        </div>

        {/* Column 2: BUSINESS */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">BUSINESS</h3>
          <ul>
            <li>Reg.number 3550763</li>
            <li>Copyright</li>
          </ul>
        </div>

        {/* Column 3: OFFICE ADDRESS */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">OFFICE ADDRESS</h3>
          <ul>
            <li>4th Avenue, Gwarinpa Abuja, Nigeria</li>
            <li>Ave Wabash, Wakesha, Wiscosin, United State of America.</li>
          </ul>
        </div>

        {/* Column 4: CONTACT */}
        <div>
          <h3 className="font-bold text-lg mb-2">CONTACT</h3>
          <p>+2342013309376</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
