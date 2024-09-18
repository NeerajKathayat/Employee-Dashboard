import React from 'react';
import Loader from './Loader';

const GridLoader = ({ count = 15 }) => {
  const loaderItems = Array.from({ length: count });

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {loaderItems.map((_, index) => (
        <Loader key={index} />
      ))}
    </div>
  );
};

export default GridLoader;