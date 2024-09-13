const CurrentLoadingSkeleton: React.FC = () => {
  return (
    <div className="p-6 md:w-1/2 flex flex-col justify-between animate-pulse" data-testid="loading-skeleton-current">
      <div className="relative mb-6 aspect-square bg-customPurple-50 rounded-md"></div> {/* Pulsating square for cover art */}
      <div className="mb-4 h-6 bg-customPurple-50 rounded w-3/4"></div> {/* Title placeholder */}
      <div className="mb-2 h-4 bg-customPurple-50 rounded w-1/2"></div> {/* Artist placeholder */}
      <div className="flex items-center justify-between mb-5">
        <div className="h-10 w-10 bg-customPurple-50 rounded"></div> {/* Button placeholder */}
        <div className="h-10 w-10 bg-customPurple-50 rounded"></div>
        <div className="h-10 w-10 bg-customPurple-50 rounded"></div>
        <div className="h-10 w-10 bg-customPurple-50 rounded"></div>
        <div className="h-10 w-10 bg-customPurple-50 rounded"></div>
      </div>
      <div className="h-2 w-full bg-customPurple-50 rounded"></div> {/* Volume control placeholder */}
    </div>
  );
};

export default CurrentLoadingSkeleton