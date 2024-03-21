import React from 'react';
import Link from 'next/link';

const LoadMoreButton = () => {
  return (
    <div className="flex justify-center pt-4 pb-6">
      <div className="bg-white rounded-lg shadow-md">
        <Link href="/loadmore">
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary focus:outline-none focus:bg-blue-600">
            Load more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoadMoreButton;


