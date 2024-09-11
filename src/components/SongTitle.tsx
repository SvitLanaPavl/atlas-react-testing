import React from 'react'

interface SongTitleProps {
  title: string;
  artist: string;
}

const SongTitle: React.FC<SongTitleProps> = ( {title, artist} ) => {
  return (
    <div >
      <h2 className='mb-2 text-2xl leading-8 font-bold text-customPurple-600'>{title}</h2>
      <p className='mb-4 text-customPurple-300'>{artist}</p>
    </div>
  )
}

export default SongTitle