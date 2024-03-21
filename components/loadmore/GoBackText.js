import React from 'react';
import Link from 'next/link'; 

const GoBackText = () => {
  return (
    <h1 className='text-primary ml-10 mt-4 relative inline-block'>
      <Link href="/">
        <span className='bg-white px-3 py-1 rounded-md border border-primary cursor-pointer hover:text-black'>
          Go Back
        </span>
      </Link>
    </h1>
  );
};

export default GoBackText;
