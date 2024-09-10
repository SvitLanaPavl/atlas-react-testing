import React from 'react';

const PlaylistLoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 p-6 md:w-1/2">
      {/* Repeat this block for several skeleton items */}
      {Array(10).fill(null).map((_, index) => (
        <div key={index} className="w-full animate-pulse flex justify-between">
          {/* Left: Title and Artist */}
          <div className="flex-grow mr-4">
            <div className="h-4 bg-customPurple-50 rounded w-3/4"></div> {/* Placeholder for song title */}
            <div className="h-3 bg-customPurple-50 rounded w-1/2 mt-2"></div> {/* Placeholder for artist */}
          </div>
          {/* Right: Duration (Square) */}
          <div className="h-8 w-8 bg-customPurple-50 rounded flex-shrink-0"></div> {/* Placeholder for duration */}
        </div>
      ))}
    </div>
  );
};

export default PlaylistLoadingSkeleton;
