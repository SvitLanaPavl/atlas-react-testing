import React from 'react'

interface CoverArtProps {
  cover: string;
}

const CoverArt: React.FC<CoverArtProps> = ( {cover} ) => {
  return (
    <div className='relative mb-6 aspect-square'>
      <img src={cover} alt='placeholder image' className='h-full w-full rounded-md aspect-[400/400] object-cover block align-middle' />
    </div>
  )
}

export default CoverArt