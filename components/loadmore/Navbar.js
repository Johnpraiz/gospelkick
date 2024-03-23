// import React from 'react';
// import Link from 'next/link';
// import { FaSearch } from 'react-icons/fa'; 

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center bg-black text-primary p-2 md:p-4">
//       <div className="logo">
//         <Link href="/">
//           <span className="text-white ml-4">GOSPELKICK</span>
//         </Link>
//       </div>
     
//       <div className="search flex items-center">
//         <input type="text" placeholder="Search..." className="p-2 border-blue border rounded-md" />
//         <button className="p-2 bg-black text-primary border-primary border  rounded-md cursor-pointer hover:bg-darkblue">
//           <FaSearch /> 
//         </button>
//       </div>
//       <div className="hidden md:flex mr-4">
//         <Link href="/afro-beat">
//           <span className="mr-4 text-blue">Afro-Beat</span>
//         </Link>
//         <Link href="/christian-gospel">
//           <span className="mr-4 text-blue">Christian/Gospel</span>
//         </Link>
//         <Link href="/hip-pop">
//           <span className="text-blue">Hip-Pop</span>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-primary p-2 md:p-4">
      <div className="logo">
        <Link href="/">
          <span className="text-white ml-4 hover:text-primary">GOSPELKICK</span>
        </Link>
      </div>
     
      <div className="search flex items-center">
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="p-2 border-blue border rounded-l-lg" />
          <button className="p-2 bg-black text-primary border-primary border rounded-r-lg cursor-pointer hover:bg-darkblue pt-3 pb-3">
            <FaSearch /> 
          </button>
        </div>
      </div>
       
      <div className="hidden md:flex mr-4">
        <Link href="/afro-beat">
          <span className="mr-4 text-primary hover:text-white">Afro-Beat</span>
        </Link>
        <Link href="/christian-gospel">
          <span className="mr-4 text-primary hover:text-white">Christian/Gospel</span>
        </Link>
        <Link href="/hip-pop">
          <span className="text-primary hover:text-white">Hip-Pop</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
