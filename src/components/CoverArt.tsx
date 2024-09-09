import React from 'react'
import placeholder from '../assets/placeholder.svg'

const CoverArt: React.FC = () => {
  return (
    <div className='relative mb-6 aspect-square'>
      <img src={placeholder} alt='placeholder image' className='h-full w-full rounded-md aspect-[400/400] object-cover block align-middle' />
    </div>
  )
}

export default CoverArt