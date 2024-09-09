import React from 'react'

const PlayListItem = ( {title, artist, duration, isCurrent} ) => {
  return (
    <button className={`flex w-full justify-between items-center mb-1 cursor-pointer ${isCurrent ? 'bg-customPurple-50 rounded-md' : 'bg-transparent'} hover:bg-customPurple-50 transition duration-150 ease-in-out rounded-md p-1`}>
      <div className='text-left'>
        <div className='font-medium  text-customPurple-700'>{title}</div>
        <div className='text-sm leading-5 text-customPurple-300'>{artist}</div>
      </div>
      <div className='text-sm leading-5 text-customPurple-300'>{duration}</div>
    </button>
  );
}

export default PlayListItem