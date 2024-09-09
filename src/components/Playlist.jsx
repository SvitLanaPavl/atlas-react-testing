import React from 'react'
import PlayListItem from './PlayListItem'

const Playlist = () => {
  return (
    <div className='border-t border-l-0 p-6 md:w-1/2 md:border-l md:border-customPurple-50 md:border-t-0'>
      <h3 className='mb-4 text-lg text-customPurple-600 leading-7 font-semibold'>Playlist</h3>
      <PlayListItem title='Painted in Blue' artist='Soul Canvas' duration='5:55' isCurrent />
      <PlayListItem title='Tidal Drift' artist='Echoes of the Sea' duration='8:02' />
      <PlayListItem title='Fading Shadows' artist='The Emberlight' duration='3:01' />
      <PlayListItem title='Cosmic Drift' artist='Solar Flare' duration='5:01' />
      <PlayListItem title='Urban Serenade' artist='Midnight Groove' duration='4:54' />
      <PlayListItem title='Whispers in the Wind' artist='Rust & Ruin' duration='6:13' />
      <PlayListItem title='Electric Fever' artist='Neon Jungle' duration='8:41' />
      <PlayListItem title='Edge of the Abyss' artist='Steel Horizon' duration='2:27' />
      <PlayListItem title='Golden Haze' artist='Velvet Waves' duration='3:15' />
      <PlayListItem title='Shatter the Silence' artist='Thunderclap Echo' duration='8:22' />
    </div>
  )
}

export default Playlist