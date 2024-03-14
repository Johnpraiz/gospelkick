import React from 'react';

const LoadMoreButton = () => {
  return (
    <div className="flex justify-center pt-4 pb-6">
      <div className="bg-white rounded-lg shadow-md">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary focus:outline-none focus:bg-blue-600">
          Load more
        </button>
      </div>
    </div>
  );
};

export default LoadMoreButton;
